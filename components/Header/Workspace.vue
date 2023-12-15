<template>
    <el-popover v-if="isReady" placement="bottom" :width="140" trigger="hover" popper-class="workspace-poppover" ref="4">
        <div class="workspace-list">
            <div class="item font-medium" @click="handleLink('/patspace/patent-folder')">
                <img src="~/assets/images/header/workspace2x.png" alt="">
                专利空间
            </div>
            <div class="item font-medium" @click="toUrl('/documentCenter/patentDownload')">
                <img src="~/assets/images/header/dangan2x.png" alt="">
                档案中心
            </div>
        </div>
        <template #reference>
            <p class="font-medium text-btn">
                <img src="~/assets/images/header/scoped2x.png" alt="">
                工作空间
            </p>
        </template>
    </el-popover>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user';


const router = useRouter()
const userStore = useUserStore();

const isReady = ref(false)
const userData = inject('userData')
onMounted(() => {
    isReady.value = true
})
function handleLink() {
    if (!userData.value.userMobile) {
        ElMessage.error('请完善手机号码！')
        location.href = import.meta.env.VITE_ENT_HOST + '/userCenter/accountInfo'
        return
    }

    if(userStore.psPermission.work_space == 0){
        ElMessage.error('服务未开通');
        return;
    }

    location.href = '/patspace/patent-folder'
}
const toUrl = (url) => {
    if (!userData.value.userMobile) {
        ElMessage.error('请完善手机号码！')
        location.href = import.meta.env.VITE_ENT_HOST + '/userCenter/accountInfo'
        return
    }
    location.href = import.meta.env.VITE_ENT_HOST + url
}
</script>

<style scoped>
.workspace-list .item {
    padding: 0 20px;
    box-sizing: border-box;
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    font-size: 14px
}

.workspace-list .item:hover {
    background: rgba(0, 82, 217, 0.1);
}

.workspace-list .item img {
    margin-right: 6px;
    width: 16px;
    height: 16px;
}

.workspace-list .time {
    line-height: 20px;
    text-align: center;
}

.workspace-list .btn {
    text-align: center;
    margin: 15px 0;
}

.workspace-list .divider {
    margin: 5px 15px;
    border: 1px solid #E8ECF3;
}

</style>
<style>
.workspace-poppover {
    padding: 0px !important;
    min-width: 118px !important;
}
</style>
