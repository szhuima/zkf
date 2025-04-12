<template>
  <div class="input-area">
    <div class="action-buttons">
      <div class="upload-group">
        <a-upload
          :show-upload-list="false"
          :before-upload="beforeUpload"
        >
          <a-button type="text">
            <template #icon><picture-outlined /></template>
          </a-button>
        </a-upload>
        <a-upload
          :show-upload-list="false"
          :before-upload="beforeUpload"
        >
          <a-button type="text">
            <template #icon><file-outlined /></template>
          </a-button>
        </a-upload>
      </div>
    </div>
    
    <div class="inputBox">
        <div
      ref="editorRef"
      class="editable-div"
      contenteditable
      placeholder="请输入消息"
      @keydown.enter="handleKeydown"
      @input="handleInput"
    ></div>
    </div>


    <div class="sendBtnBox">
        <a-button type="primary" @click="handleSend">
        发送
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PictureOutlined, FileOutlined } from '@ant-design/icons-vue'

const editorRef = ref(null)

const emit = defineEmits(['send', 'upload'])

const handleSend = () => {
  const content = editorRef.value?.innerText.trim()
  if (content) {
    emit('send', content)
    editorRef.value.innerHTML = ''
  }
}

const handleKeydown = (e) => {
  if (!e.shiftKey) {
    e.preventDefault()
    handleSend()
  }
}

const handleInput = () => {
  // 自动调整高度逻辑
  if (editorRef.value) {
    editorRef.value.style.height = 'auto'
    editorRef.value.style.height = `${editorRef.value.scrollHeight}px`
  }
}

const beforeUpload = (file) => {
  emit('upload', file)
  return false // 阻止自动上传
}
</script>

<style scoped>
.input-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.inputBox {
  flex: 1;
  min-height: 200px;
  max-width: 80%;
  overflow-y: hidden;
}

.editable-div {
  width: 100%;
  min-height: 150px;
  height: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 4px 11px;
  outline: none;
}

.editable-div:empty::before {
  content: attr(placeholder);
  color: #bfbfbf;
}

.sendBtnBox {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.input-area {
  gap: 8px;
}
</style>