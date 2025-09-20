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
                        <div class="info-label">求學年份</div>
                        <div class="info-value">{{ post?.pYear || '-' }}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">分享時光</div>
                        <div class="info-value">{{ post?.pDate || '-' }}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">學業表現</div>
                        <div class="info-value">{{ post?.pScore || '-' }}</div>
                    </div>
                    <div class="info-item" v-if="post?.pGPA">
                        <div class="info-label">GPA</div>
                        <div class="info-value">{{ post.pGPA }}</div>
                    </div>
                </div>

                <div class="section">
                    <h4 class="section-title">📖 求學歷程</h4>
                    <div class="section-content">{{ post?.pExp || '這段旅程尚未記錄...' }}</div>
                </div>

                <div class="section">
                    <h4 class="section-title">🌟 收穫與成果</h4>
                    <div class="section-content">{{ post?.pResult1 || '成果仍在醞釀中...' }}</div>
                </div>

                <div class="section" v-if="post?.pURL">
                    <h4 class="section-title">📜 故事出處</h4>
                    <a :href="post.pURL" target="_blank" class="source-link">
                        ✨ 閱讀完整故事
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