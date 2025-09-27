<template>
  <div class="about-page">
    <Header />
    <main class="about-main">
      <div class="about-container">
        <h2>關於推甄經驗分享平台</h2>
        
        <div class="about-section">
          <h3>🎯 平台宗旨</h3>
          <p>
            這個平台致力於收集和分享研究所推甄的真實經驗，幫助學弟妹們更好地了解推甄過程，
            並從前人的經驗中獲得寶貴的參考資訊。
          </p>
        </div>

        <div class="about-section">
          <h3>✨ 主要功能</h3>
          <ul>
            <li><strong>經驗瀏覽</strong> - 以表格形式清晰呈現所有推甄經驗</li>
            <li><strong>智能搜尋</strong> - 支援學校、系所、結果等關鍵字搜尋</li>
            <li><strong>詳細資訊</strong> - 點擊查看完整的背景、經歷與推甄結果</li>
            <li><strong>經驗分享</strong> - 讓使用者也能貢獻自己的推甄經驗</li>
            <li><strong>分頁瀏覽</strong> - 優化大量資料的瀏覽體驗</li>
          </ul>
        </div>

        <div class="about-section">
          <h3>🛠️ 技術架構</h3>
          <div class="tech-grid">
            <div class="tech-item">
              <h4>前端框架</h4>
              <p>Vue 3 + Composition API</p>
            </div>
            <div class="tech-item">
              <h4>開發工具</h4>
              <p>Vite + Vue Router</p>
            </div>
            <div class="tech-item">
              <h4>表單驗證</h4>
              <p>VeeValidate + Yup</p>
            </div>
            <div class="tech-item">
              <h4>設計風格</h4>
              <p>現代化響應式設計</p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h3>📊 資料來源</h3>
          <p>
            平台上的經驗分享主要來自於各大論壇（如 Dcard）的推甄心得文章，
            經過整理和結構化處理，讓資訊更容易查找和比較。
          </p>
        </div>

        <div class="about-section">
          <h3>🤝 如何貢獻</h3>
          <p>
            歡迎所有有推甄經驗的同學分享自己的故事！點擊首頁的「分享經驗」按鈕，
            填寫相關資訊，讓你的經驗也能幫助到其他人。
          </p>
        </div>

        <div class="back-to-home">
          <router-link to="/" class="home-link">
            ← 回到首頁
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.about-main {
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
  width: 100%;
}

.about-container {
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-strong);
  border: 1px solid var(--border-soft);
}

.about-container h2 {
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xl) 0;
  text-align: center;
  letter-spacing: 0.02em;
  font-family: 'Source Serif Pro', serif;
}

.about-section {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-soft);
}

.about-section:last-of-type {
  border-bottom: none;
  margin-bottom: var(--spacing-lg);
}

.about-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-family: 'Source Serif Pro', serif;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.about-section p {
  color: var(--text-primary);
  line-height: 1.8;
  font-size: 1.1rem;
  font-family: 'Crimson Text', serif;
  margin-bottom: var(--spacing-md);
}

.about-section ul {
  list-style: none;
  padding: 0;
}

.about-section li {
  color: var(--text-primary);
  line-height: 1.8;
  font-size: 1.1rem;
  font-family: 'Crimson Text', serif;
  margin-bottom: var(--spacing-sm);
  padding-left: var(--spacing-lg);
  position: relative;
}

.about-section li::before {
  content: '•';
  color: var(--accent-color);
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  top: -2px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.tech-item {
  background: linear-gradient(135deg, var(--surface-soft) 0%, var(--surface) 100%);
  padding: var(--spacing-md);
  border-radius: var(--radius);
  border: 1px solid var(--border-soft);
  text-align: center;
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

.tech-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  font-family: 'Source Serif Pro', serif;
}

.tech-item p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  font-family: 'Crimson Text', serif;
}

.back-to-home {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-soft);
}

.home-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  padding: var(--spacing-md) var(--spacing-lg);
  background: linear-gradient(135deg, 
    rgba(139, 115, 85, 0.08) 0%, 
    rgba(212, 175, 55, 0.08) 100%);
  border-radius: var(--radius);
  transition: all 0.3s ease;
  font-size: 1rem;
  font-family: 'Crimson Text', serif;
  border: 1px solid var(--border-soft);
}

.home-link:hover {
  background: linear-gradient(135deg, 
    rgba(139, 115, 85, 0.15) 0%, 
    rgba(212, 175, 55, 0.15) 100%);
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .about-main {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
  
  .about-container {
    padding: var(--spacing-lg) var(--spacing-md);
  }
  
  .about-container h2 {
    font-size: 2rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>