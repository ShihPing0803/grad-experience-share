<script setup>
import Header from '../components/Header.vue'
import posts from '../data/data.js'
import PostTable from '../components/PostTable.vue'
import DetailModal from '../components/DetailModal.vue'
import Pagination from '../components/Pagination.vue'
import NewPostModal from '../components/NewPostModal.vue'
import { ref, computed } from 'vue'

const keyword = ref('');
const selectedPost = ref(null)
const showModal = ref(false)
const showShareModal = ref(false)
const currentPage = ref(1)
const itemsPerPage = 10
const allPosts = ref([...posts])

function openDetail(post) {
  selectedPost.value = post
  showModal.value = true
}

function openShareModal() {
  showShareModal.value = true
}

function handleNewExperience(newExperience) {
  allPosts.value.unshift(newExperience)
  showShareModal.value = false
  // Reset search and pagination to show the new entry
  keyword.value = ''
  currentPage.value = 1
}

function handlePageChange(page) {
  currentPage.value = page
  // Scroll to top when page changes
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const filteredPosts = computed(() => {
  if (!keyword.value) return allPosts.value;
  return allPosts.value.filter((p) => {
    return (
      p.pSchool?.includes(keyword.value) ||
      p.pDep?.includes(keyword.value) ||
      p.pResult1?.includes(keyword.value) 
    );
  });
});

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / itemsPerPage)
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPosts.value.slice(start, end)
})
</script>

<template>
  <Header @share="openShareModal" />
  <main>
    <h2>研究所推甄經驗分享</h2>
    <div class="search-container">
      <input 
        v-model="keyword" 
        @input="currentPage = 1"
        type="search" 
        placeholder="✨ 尋找共鳴..." 
        class="search-box" 
      />
    </div>
    
    <div v-if="filteredPosts.length > 0">
      <div class="results-summary">
        找到 {{ filteredPosts.length }} 個相關經驗分享
      </div>
      
      <div class="table-container">
        <PostTable :posts="paginatedPosts" @select="openDetail"/>
      </div>
      
      <Pagination 
        v-if="totalPages > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        :total-items="filteredPosts.length"
        :items-per-page="itemsPerPage"
        @page-change="handlePageChange"
      />
    </div>
    
    <div v-else class="no-results">
      <p>暫無相關的求學足跡</p>
      <p style="font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">或許換個關鍵詞，會有意想不到的發現</p>
    </div>
    
    <DetailModal :visible="showModal" :post="selectedPost" @close="showModal=false" />
    <NewPostModal :visible="showShareModal" @close="showShareModal=false" @submit="handleNewExperience" />
  </main>
</template>