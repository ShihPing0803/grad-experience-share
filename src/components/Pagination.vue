<template>
  <div class="pagination-container">
    <div class="pagination-info">
      顯示第 {{ startItem }}-{{ endItem }} 項，共 {{ totalItems }} 項結果
    </div>
    
    <div class="pagination-controls">
      <button 
        class="pagination-btn prev-btn"
        :disabled="currentPage === 1"
        @click="$emit('page-change', currentPage - 1)"
      >
        ← 上一頁
      </button>
      
      <div class="page-numbers">
        <button
          v-for="page in visiblePages"
          :key="page"
          class="page-btn"
          :class="{ active: page === currentPage }"
          @click="$emit('page-change', page)"
        >
          {{ page }}
        </button>
      </div>
      
      <button 
        class="pagination-btn next-btn"
        :disabled="currentPage === totalPages"
        @click="$emit('page-change', currentPage + 1)"
      >
        下一頁 →
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 10 }
})

const emit = defineEmits(['page-change'])

const startItem = computed(() => {
  return (props.currentPage - 1) * props.itemsPerPage + 1
})

const endItem = computed(() => {
  return Math.min(props.currentPage * props.itemsPerPage, props.totalItems)
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, props.currentPage - Math.floor(maxVisible / 2))
  let end = Math.min(props.totalPages, start + maxVisible - 1)
  
  // Adjust start if we're near the end
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})
</script>

<style scoped>
.pagination-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg);
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  border: 1px solid var(--border-soft);
}

.pagination-info {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-style: italic;
  font-family: 'Crimson Text', serif;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  justify-content: center;
}

.pagination-btn {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Crimson Text', serif;
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 80px;
}

.pagination-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, 
    rgba(139, 115, 85, 0.08) 0%, 
    rgba(212, 175, 55, 0.08) 100%);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--surface-soft);
  color: var(--text-muted);
}

.page-numbers {
  display: flex;
  gap: var(--spacing-xs);
  margin: 0 var(--spacing-sm);
}

.page-btn {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: var(--spacing-sm);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Crimson Text', serif;
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn:hover {
  background: linear-gradient(135deg, 
    rgba(139, 115, 85, 0.08) 0%, 
    rgba(212, 175, 55, 0.08) 100%);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

.page-btn.active {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-medium);
  font-weight: 600;
}

.page-btn.active:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-strong);
}

@media (max-width: 768px) {
  .pagination-container {
    padding: var(--spacing-md);
  }
  
  .pagination-controls {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .pagination-btn {
    min-width: 120px;
  }
  
  .page-numbers {
    margin: 0;
  }
}
</style>