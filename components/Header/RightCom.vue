<template>
    <div class="right-com">
        <Application :userData="userData" />
        <Service :userData="userData" />
        <div class="icon-list">
            <User :userData="userData" />
        </div>
    </div>
</template>

<script setup>
import Service from './Service.vue'
import Application from './Application.vue'
import User from './User.vue'

import { useUserStore } from '@/store'
const userStore = useUserStore()
onBeforeMount(() => {
    // 用户信息本地缓存
    userStore.getUserInfo();
})
const userData = computed(() => userStore.userData)

</script>

<style scoped>
.right-com {
    font-size: 14px;
    line-height: 22px;
    display: flex;
    color: #2b303d
}

.right-com :deep( p) {
    display: flex;
    align-items: center;
    margin-right: 8px;
    padding: 0 12px;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none
}

.right-com :deep(p img){
    width: 16px;
    height: 16px;
    margin-right: 8px
}

.right-com :deep(.text-btn:hover) {
    color: #0052d9
}

.right-com .icon-list {
    margin-left: 4px;
    display: flex;
    align-items: center;
}

.right-com .icon-list :deep(span) {
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center
}

.right-com .icon-list :deep(span:hover) {
    background-color: #e6eefb
}

.right-com .icon-list :deep( span:not(:last-child)) {
    margin-right: 8px
}

/*# sourceMappingURL=index.css.map */</style>

