<script setup>
import Header from './components/Header.vue'
import posts from './data/data.js'
import PostTable from './components/PostTable.vue'
import DetailModal from './components/DetailModal.vue'
import { ref, computed } from 'vue'

const keyword = ref('');
const selectedPost = ref(null)
const showModal = ref(false)

function openDetail(post) {
  selectedPost.value = post
  showModal.value = true
}

const filteredPosts = computed(() => {
  if (!keyword.value) return posts;
  return posts.filter((p) => {
    return (
      p.pSchool?.includes(keyword.value) ||
      p.pDep?.includes(keyword.value) ||
      p.pResult1?.includes(keyword.value)
    );
  });
});
</script>

<template>
  <Header />
  <main>
    <h2>研究所推甄經驗分享</h2>
    <div class="search-container">
      <input 
        v-model="keyword" 
        type="search" 
        placeholder="🔍 搜尋學校、系所或推甄結果..." 
        class="search-box" 
      />
    </div>
    <div v-if="filteredPosts.length > 0" class="table-container">
      <PostTable :posts="filteredPosts" @select="openDetail"/>
    </div>
    <div v-else class="no-results">
      <p>😔 查無相關結果</p>
      <p style="font-size: 0.875rem; margin-top: 0.5rem;">請嘗試其他關鍵字或瀏覽所有經驗分享</p>
    </div>
    <DetailModal :visible="showModal" :post="selectedPost" @close="showModal=false" />
  </main>
</template>

