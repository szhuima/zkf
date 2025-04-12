<template>
  <div class="app-container">
    <chat-window />
  </div>
</template>

<script setup>
import ChatWindow from './components/ChatWindow.vue'
</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>    