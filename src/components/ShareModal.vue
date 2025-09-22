<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content share-modal">
      <div class="modal-header">
        <h3 class="modal-title">✍ 分享你的推甄經驗</h3>
        <button class="close-btn" @click="close">×</button>
      </div>
      
      <div class="modal-body">
        <form @submit.prevent="submitExperience" class="share-form">
          <div class="form-section">
            <h4 class="section-title">📚 基本資訊</h4>
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">學校</label>
                <input 
                  v-model="formData.pSchool" 
                  type="text" 
                  class="form-input" 
                  placeholder="例：台灣大學"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label">系所</label>
                <input 
                  v-model="formData.pDep" 
                  type="text" 
                  class="form-input" 
                  placeholder="例：資訊管理學系"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label">推甄年度</label>
                <input 
                  v-model="formData.pYear" 
                  type="text" 
                  class="form-input" 
                  placeholder="例：114"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label">成績排名</label>
                <input 
                  v-model="formData.pScore" 
                  type="text" 
                  class="form-input" 
                  placeholder="例：5% 或 系排第3"
                />
              </div>
              <div class="form-group">
                <label class="form-label">GPA (選填)</label>
                <input 
                  v-model="formData.pGPA" 
                  type="text" 
                  class="form-input" 
                  placeholder="例：4.0/4.0"
                />
              </div>
            </div>
          </div>

          <div class="form-section">
            <h4 class="section-title">🌟 經歷與背景</h4>
            <div class="form-group">
              <label class="form-label">詳細經歷</label>
              <textarea 
                v-model="formData.pExp" 
                class="form-textarea" 
                rows="6"
                placeholder="請分享你的經歷，例如：&#10;- 專題研究&#10;- 實習經驗&#10;- 競賽得獎&#10;- 證照考取&#10;- 社團活動&#10;- 其他特殊經歷"
                required
              ></textarea>
            </div>
          </div>

          <div class="form-section">
            <h4 class="section-title">🎯 推甄結果</h4>
            <div class="form-group">
              <label class="form-label">申請結果</label>
              <textarea 
                v-model="formData.pResult1" 
                class="form-textarea" 
                rows="6"
                placeholder="請分享你的申請結果，例如：&#10;台大資管 一階落榜&#10;政大資管 正取&#10;成大資管 備取5&#10;中央資管 正取"
                required
              ></textarea>
            </div>
          </div>

          <div class="form-section">
            <h4 class="section-title">🔗 來源連結 (選填)</h4>
            <div class="form-group">
              <label class="form-label">原文連結</label>
              <input 
                v-model="formData.pURL" 
                type="url" 
                class="form-input" 
                placeholder="例：https://www.dcard.tw/f/graduate_school/p/..."
              />
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" @click="close">
              取消
            </button>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? '分享中...' : '✨ 分享經驗' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false }
})

const emit = defineEmits(['close', 'submit'])

const isSubmitting = ref(false)

const formData = reactive({
  pSchool: '',
  pDep: '',
  pYear: '',
  pScore: '',
  pGPA: '',
  pExp: '',
  pResult1: '',
  pURL: ''
})

function close() {
  emit('close')
  resetForm()
}

function resetForm() {
  Object.keys(formData).forEach(key => {
    formData[key] = ''
  })
}

async function submitExperience() {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    // Create new experience object
    const newExperience = {
      pId: `p_${Date.now()}`,
      pDate: new Date().toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\//g, '/'),
      pDcardId: null,
      pURL: formData.pURL || null,
      pYear: formData.pYear,
      pContent: `背景：
學校/系所：${formData.pSchool} ${formData.pDep}
${formData.pScore ? `成績排名：${formData.pScore}` : ''}
${formData.pGPA ? `GPA：${formData.pGPA}` : ''}

經歷：
${formData.pExp}

結果：
${formData.pResult1}`,
      pSchool: formData.pSchool,
      pDep: formData.pDep,
      p_sd_sId: "user_submitted",
      p_sd_dId: "user_submitted",
      pScore: formData.pScore || null,
      pGPA: formData.pGPA || null,
      pExp: formData.pExp,
      pResult1: formData.pResult1
    }
    
    // Emit the new experience to parent
    emit('submit', newExperience)
    
    // Show success message (you could add a toast notification here)
    alert('感謝你的分享！你的經驗已成功加入資料庫 ✨')
    
    close()
  } catch (error) {
    console.error('提交失敗:', error)
    alert('提交失敗，請稍後再試')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.share-modal {
  max-width: 900px;
  max-height: 95vh;
}

.share-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  font-family: 'Source Serif Pro', serif;
  letter-spacing: 0.3px;
}

.form-input,
.form-textarea {
  padding: var(--spacing-md);
  border: 2px solid var(--border);
  border-radius: var(--radius);
  font-size: 1rem;
  background: var(--surface);
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-family: 'Crimson Text', serif;
  line-height: 1.6;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 4px rgba(139, 115, 85, 0.1);
  transform: translateY(-1px);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
  font-style: italic;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-soft);
}

.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.3px;
  border: none;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-secondary {
  background: var(--surface-soft);
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: var(--surface);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  box-shadow: var(--shadow-medium);
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, var(--primary-hover), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: var(--shadow-strong);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .share-modal {
    margin: var(--spacing-sm);
    max-height: 98vh;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>