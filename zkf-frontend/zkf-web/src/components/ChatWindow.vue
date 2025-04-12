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
import { ref, nextTick } from 'vue'
import MessageList from './MessageList.vue'
import MessageInput from './MessageInput.vue'

const messages = ref([])
const messageListRef = ref(null)

const handleSend = (text) => {
  messages.value.push({ type: 'text', content: text, sender: 'user', timestamp: new Date() })
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