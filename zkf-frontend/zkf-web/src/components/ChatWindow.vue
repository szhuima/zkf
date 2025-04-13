<template>
  <div class="chat-container">
    <div class="messages-container">
      <message-list ref="messageListRef" :messages="messages"/>
    </div>
    <div class="input-container">
      <message-input @send="handleSend" @upload="handleUpload"/>
    </div>
  </div>
</template>

<script setup>
import {nextTick, onMounted, onUnmounted, ref} from 'vue'
import axios from 'axios'
import MessageList from './MessageList.vue'
import MessageInput from './MessageInput.vue'
import {encodeInstruction, InstructionType} from '@/proto/instruction.ts';
import {MsgRequest} from '@/proto/msg.js'; // 根据你的实际路径
import Long from 'long';
import config from '@/config.js'

const messages = ref([])
const messageListRef = ref(null)
const wsServerInfo = ref(null)
const ws = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(config.router_path)
    wsServerInfo.value = response.data
    console.log('WebSocket服务器地址:', wsServerInfo.value)

    if (wsServerInfo.value?.host && wsServerInfo.value?.port) {
      const ws = new WebSocket(`ws://${wsServerInfo.value.host}:${wsServerInfo.value.port}/zim`)

      ws.onopen = () => {
        console.log('WebSocket连接成功');
        const authMessage = {
          type: InstructionType.AUTH,
          msgId: Long.fromNumber(0),
          userId: '1'
        };
        const buffer = encodeInstruction(authMessage);
        ws.send(buffer);
        console.log('发送认证消息:', authMessage);
      }

      ws.onmessage = async (event) => {
        try {
          let data = event.data;

          // 处理Blob类型数据
          if (data instanceof Blob) {
            data = await new Response(data).arrayBuffer();
          }

          // 解码protobuf消息
          const msgRequest = MsgRequest.decode(new Uint8Array(data)); // 使用 MsgRequest.decode 进行解码
          console.log('解码后的消息:', msgRequest);

          if (msgRequest) {
            const message = msgRequest.body;
            messages.value.push({
              type: 'text',
              content: message.content,
              sender: 'bot',
              timestamp: new Date(message.sendTime)
            });

            // 回复ACK
            const ackMsg = {
              type: InstructionType.ACK,
              msgId: Long.fromNumber(message.msgId),
            };
            console.log("ackMsg", ackMsg);
            const buffer = encodeInstruction(ackMsg);
            ws.send(buffer);
            nextTick(() => {
              messageListRef.value.scrollToBottom();
            });
          } else {
            console.error('解码失败: 消息为空');
          }
        } catch (error) {
          console.error('消息处理失败:', error);
          messages.value.push({
            type: 'text',
            content: `消息解析错误: ${error.message}`,
            sender: 'system',
            timestamp: new Date()
          });
        }
      };


      ws.onerror = (error) => {
        console.error('WebSocket连接错误:', error)
      }

      ws.onclose = () => {
        console.log('WebSocket连接关闭')
      }
    }
  } catch (error) {
    console.error('获取WebSocket服务器地址失败:', error)
  }
})

// 组件卸载时关闭连接
onUnmounted(() => {
  if (ws.value) {
    ws.value.close()
  }
})

const handleSend = (text) => {
  messages.value.push({type: 'text', content: text, sender: 'user', timestamp: new Date()})

  axios.post(config.send_path, {
    conversationId: crypto.randomUUID(),
    msgId: Date.now(),
    content: text,
    contentType: 'TEXT',
    from: '1',
    botAnswer: false,
    scene: 'PRE_SALE'
  })
      .then(response => {
        console.log('消息发送成功:', response.data)
      })
      .catch(error => {
        console.error('消息发送失败:', error)
        messages.value.push({
          type: 'text',
          content: '消息发送失败，请重试',
          sender: 'system',
          timestamp: new Date()
        })
      });

  nextTick(() => {
    messageListRef.value.scrollToBottom()
  })
}

const handleUpload = (file) => {
  // TODO: 处理文件上传
  const type = file.type.startsWith('image/') ? 'image' : 'file'
  messages.value.push({type, content: file.name, sender: 'user', timestamp: new Date()})
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 60%;
  max-width: 768px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.input-container {
  padding: 8px 16px;
  min-height: 56px;
  max-height: 200px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  margin: 0 8px 8px;
}
</style>