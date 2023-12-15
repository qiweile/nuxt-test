<template>
    <div class="right-com">
        <Application :userData="userData" />
        <Service :userData="userData" />
        <Online />
        <Workspace />
        <div class="icon-list">
            <!-- <History /> -->
            <Message />
            <User :userData="userData" />
            <Help />
        </div>
    </div>
</template>

<script setup lang="ts">
import Service from './Service.vue'
import Online from './Online.vue'
import Application from './Application.vue'
import Help from './Help.vue'
import History from './History.vue'
import Message from './Message.vue'
import User from './User.vue'
import Workspace from './Workspace.vue'
import { getUserInfo } from '@/api/user'
const userData = ref({})
onBeforeMount(() => {
    getUserInfo().then(res => {
        if (res.data) {
            userData.value = res.data
        }
    }).catch( err => {
        
    })
})
provide('userData', userData)
</script>

<style scoped>
.right-com {
    /* display: flex;
    line-height: 22px;
    font-size: 14px;
    color: #2b303d;
    font-weight: 500;
    font-family: Alibaba-PuHuiTi-Medium; */
    font-size: 14px;
    line-height: 22px;
    display: flex;
    color: #2b303d
}

.right-com :deep( p) {
    /* display: flex;
    align-items: center;
    margin-right: 8px;
    padding: 0 12px;
    cursor: pointer;
    user-select: none; */

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

