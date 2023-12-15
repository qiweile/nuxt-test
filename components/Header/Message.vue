<template>
    <el-popover v-if="isReady1" placement="bottom" :width="316" trigger="hover" popper-class="message-poppover">
        <div class="message-poppover-container">
            <div class="top">
                <p>未读消息（{{ unReadMessageCount }}）</p>
            </div>
            <div v-loading="loading" class="list">
                <div v-for="(item, index) in messageList" :key="index" class="item" @click="handleRead(item)">
                    <div class="title font-medium">{{ item.msgTag }}</div>
                    <div class="desc">
                        {{ item.msgContext }}
                    </div>
                    <div class="time">
                        {{ item.createDate }}
                    </div>
                </div>
            </div>
            <div v-if="messageList.length > 0" class="divider" />
            <div class="bottom">
                <div @click="handleReadAll">当前页标记为已读</div>
                <div @click="toAllMesage" class="font-medium">查看全部</div>
            </div>
        </div>
        <template #reference>
            <span class="icon-container">
                <img src="~/assets/images/header/massage2x.png" style="width:14px;height:16px;" alt="">
            </span>
        </template>

    </el-popover>
</template>

<script setup>
import { getList, read } from '~/api/message.js'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import useMessageLink from '~/hooks/useMessageLink'
import useConfirm from '~/hooks/useConfirm'
const userStore = useUserStore()
const { unReadMessageCount } = storeToRefs(userStore)
const loading = ref(false)
const isReady1 = ref(false)
const messageList = ref([])
const funList = () => {
    getList({
        readState: 0,
        page: 1,
        limit: 5
    }).then(res => {
        messageList.value = res.data.records
    }).finally(() => {
        loading.value = false
    })
}
const toAllMesage = () => {
    location.href = import.meta.env.VITE_ENT_HOST + '/message'
}
onMounted(() => {
    isReady1.value = true
    loading.value = true
    funList()
    userStore.getUnReadMessageState()
})

watch(unReadMessageCount, val => {
    if (val > 0) {
        funList()
    }
}, { immediate: true })
const { link } = useMessageLink()
function handleRead(row) {
    if (!row.readState) {
        read([row.id]).then(res => {
            row.readState = true
            userStore.getUnReadMessageState()
        })
    }
    // console.log(row);
    link(row)
}
const { confirm } = useConfirm()
function handleReadAll() {
    return confirm('确定标记已读吗？').then(() => {
        read(messageList.value.map(item => item.id)).then(() => {
            ElMessage.success('操作成功')
            userStore.getUnReadMessageState()
        })
    }).catch(() => {

    })
}



</script>

<style scoped>
.message-poppover-container .top {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-bottom: 1px solid #E8ECF3;
}

.message-poppover-container .top p:first-child {
    font-size: 16px;
    font-weight: 600;
    color: #2b303d;
    line-height: 22px
}

.message-poppover-container .list {
    padding: 0 24px;
}

.message-poppover-container .list .item {
    line-height: 24px;
    margin: 16px 0;
    cursor: pointer;
}



.message-poppover-container .list .item .title {
    font-weight: 500;
    line-height: 21px;
    font-size: 14px;
    color: #333;
}

.message-poppover-container .list .item .desc {
    color: rgba(43, 48, 61, 0.6);
    line-height: 21px;
    margin: 4px 0;
    font-size: 14px;
}

.message-poppover-container .list .item .time {
    line-height: 18px;
}

.message-poppover-container .list .item:hover .title {
    color: #0052D9;
}

.message-poppover-container .list .item:hover .desc {
    color: #0052D9;
}

.message-poppover-container .list .item:hover .time {
    color: #0052D9;
}

.message-poppover-container .divider {
    margin: 5px 0;
    border: 1px solid #E8ECF3;
}

.message-poppover-container .bottom {
    height: 55px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.message-poppover-container .bottom>div {
    user-select: none;
    font-size: 14px;
    cursor: pointer;
}

.message-poppover-container .bottom>div:first-child {
    color: rgba(43, 48, 61, 0.6);
    font-weight: 400;
}

.message-poppover-container .bottom>div:last-child {
    color: #0052D9;
    font-weight: 500;
}
</style>
<style>
.message-poppover {
    padding: 0px !important;
}
</style>

