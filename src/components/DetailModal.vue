<template>
    <div v-if="visible" class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">{{ post?.pSchool }} {{ post?.pDep }}</h3>
                <button class="close-btn" @click="close">×</button>
            </div>
            
            <div class="modal-body">
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">推甄年度</div>
                        <div class="info-value">{{ post?.pYear || '-' }}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">發布日期</div>
                        <div class="info-value">{{ post?.pDate || '-' }}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">成績排名</div>
                        <div class="info-value">{{ post?.pScore || '-' }}</div>
                    </div>
                    <div class="info-item" v-if="post?.pGPA">
                        <div class="info-label">GPA</div>
                        <div class="info-value">{{ post.pGPA }}</div>
                    </div>
                </div>

                <div class="section">
                    <h4 class="section-title">📚 背景與經歷</h4>
                    <div class="section-content">{{ post?.pExp || '無相關資訊' }}</div>
                </div>

                <div class="section">
                    <h4 class="section-title">🎯 推甄結果</h4>
                    <div class="section-content">{{ post?.pResult1 || '無相關資訊' }}</div>
                </div>

                <div class="section" v-if="post?.pURL">
                    <h4 class="section-title">🔗 資料來源</h4>
                    <a :href="post.pURL" target="_blank" class="source-link">
                        📖 查看 Dcard 原文
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        post: { type: Object, default: null },
        visible: { type: Boolean, default: false }
    });

    const emit = defineEmits(['close']);;
    function close() {
        emit('close');
    };
</script>