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

    <div class="sendBtnBox">
        <a-button type="primary" @click="handleSend">
        发送
      </a-button>
    </div>
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
  // 自动调整高度逻辑（已移除）
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
  height: 100%;
}

.inputBox {
  flex: 1;

  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: auto;
}

.editable-div {
  padding: 10px;
  width: 100%;
  height: 200px;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #d9d9d9;
  padding: 4px 40px 24px 11px;
  outline: none;
}

.editable-div:empty::before {
  content: attr(placeholder);
  color: #bfbfbf;
}

.sendBtnBox {
  position: absolute;
  right: 15px;
  bottom: 10px;
  top: auto;
  z-index: 1;
}

.input-area {
  gap: 8px;
}
</style>