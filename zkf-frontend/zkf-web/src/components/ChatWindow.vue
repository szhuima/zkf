<template>
  <div class="chat-container">
    <div class="messages-container">
      <message-list ref="messageListRef" :messages="messages" />
    </div>
    <div class="input-container">
      <message-input @send="handleSend" @upload="handleUpload" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import MessageList from './MessageList.vue'
import MessageInput from './MessageInput.vue'
import { InstructionType, encodeInstruction } from '@/proto/instruction.ts';
import Long from 'long';

const messages = ref([])
const messageListRef = ref(null)
const wsServerInfo = ref(null)
const ws = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8001/route/server/1')
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
      
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data)
        messages.value.push({
          ...message,
          sender: 'bot',
          timestamp: new Date()
        })
        nextTick(() => messageListRef.value.scrollToBottom())
      }
      
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
  messages.value.push({ type: 'text', content: text, sender: 'user', timestamp: new Date() })
  
  axios.post('http://localhost:9006/dispatch/conversation', {
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
  messages.value.push({ type, content: file.name, sender: 'user', timestamp: new Date() })
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 70%;
  max-width: 80%;
  margin: 20px auto;
  border: 1px solid #d7d3d3;
  border-radius: 8px;
}

.messages-container {
  flex: 1;
  overflow-y: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.input-container {
  border-top: 1px solid #f0f0f0;
}
</style>