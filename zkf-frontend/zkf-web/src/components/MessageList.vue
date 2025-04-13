<template>
  <div class="message-list" ref="messageContainer">

    <div v-for="(message, index) in messages" :key="index" class="message-item" :class="message.sender">
      <div v-if="message.type === 'text'" class="message-bubble">
        {{ message.content }}
      </div>
      <div v-else-if="message.type === 'image'" class="message-bubble">
        <a-image :src="message.content" width="200px" />
      </div>
      <div v-else class="message-bubble">
        <a-button type="link" @click="downloadFile(message.content)">
          <template #icon><download-outlined /></template>
          {{ message.content }}
        </a-button>
      </div>
      <div class="message-time">
        {{ formatTime(message.timestamp) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { DownloadOutlined } from '@ant-design/icons-vue'
import { Image as AImage, Button as AButton } from 'ant-design-vue'

const props = defineProps({
  messages: {
    type: Array,
    required: true
  }
})

const messageContainer = ref(null)

watch(() => props.messages, () => {
  scrollToBottom()
}, { deep: true })

const scrollToBottom = () => {
  if (messageContainer.value) {
    messageContainer.value.scrollTo({
      top: messageContainer.value.scrollHeight,
      behavior: 'smooth'
    })
  }
}

defineExpose({
  scrollToBottom
});

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const downloadFile = (filename) => {
  // TODO: 实现文件下载
  console.log('下载文件:', filename)
}
</script>

<style scoped>
.message-list {
  height: 100%;
  overflow-y: auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.message-item {
  display: flex;
  flex-direction: column;
  max-width: 80%;
}

.message-item.user {
  align-self: flex-end;
  align-items: flex-end;
}

.message-item:not(.user) {
  align-self: flex-start;
  align-items: flex-start;
}

.message-bubble {
  padding: 12px 16px;
  border-radius: 8px;
  background: #f0f0f0;
}

.message-item.user .message-bubble {
  background: #f5f5f5;
}

.message-item.bot .message-bubble{
  background: #f5f5f5;
}

.message-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
</style>