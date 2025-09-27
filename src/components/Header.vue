<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">
        <router-link to="/" class="logo-link">
          ✦ 推甄經驗分享 ✦
        </router-link>
      </h1>
      <nav class="nav-menu">
        <router-link to="/" class="nav-link">首頁</router-link>
        <router-link to="/about" class="nav-link">關於</router-link>
      </nav>
      <button class="add-btn" @click="handleShare">
        ✍ 分享經驗
      </button>
    </div>
  </header>
</template>


<script setup>
  const emit = defineEmits(['share'])

  function handleShare() {
    emit('share')
  }
</script>