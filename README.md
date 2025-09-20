# 🎓 Grad Experience Share

> 📖 A Vue.js project for sharing graduate school admission experiences.  
> 使用 Vue.js 打造的研究所推甄經驗分享平台，支援搜尋、詳細資訊與結構化結果呈現。

## ✨ Features

- **表格檢索**  
  以樸實乾淨的表格呈現所有案例，支援關鍵字搜尋。  

- **詳細資訊 Modal**  
  點擊表格列即可展開完整背景、經歷與推甄結果，避免一次塞滿頁面。  
---

## 🚀 Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/ShihPing0803/grad-experience-share.git
cd grad-experience-share
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Dev Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 📂 Project Structure

```
src/
 ├─ assets/           # 全域樣式與資源
 ├─ components/       # 可重用元件 (Header, PostTable, DetailModal, ...)
 ├─ data/             # JSON / data.js 測資
 ├─ utils/            # 輔助函式 (例如 parseResults)
 ├─ App.vue           # 主頁
 └─ main.js           # 入口
```

---

## 🛠️ Tech Stack

* [Vue 3](https://vuejs.org/) - Composition API + `<script setup>`
* [Vite](https://vitejs.dev/) - 開發環境與建置工具
* \[Optional] TailwindCSS / 原生 CSS - 美化 UI

---
