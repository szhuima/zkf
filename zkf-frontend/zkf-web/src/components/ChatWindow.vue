<template>
  <div class="chat-container">
    <div class="messages-container">
      <message-list :messages="messages" />
    </div>
    <div class="input-container">
      <message-input @send="handleSend" @upload="handleUpload" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MessageList from './MessageList.vue'
import MessageInput from './MessageInput.vue'

const messages = ref([])

const handleSend = (text) => {
  // TODO: 调用HTTP接口发送消息
  messages.value.push({ type: 'text', content: text, sender: 'user', timestamp: new Date() })
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
  overflow-y: auto;
  padding: 16px;
}

.input-container {
  border-top: 1px solid #f0f0f0;
}
</style>