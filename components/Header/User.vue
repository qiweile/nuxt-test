<template>
    <el-popover v-if="isReady" placement="bottom" :width="240" trigger="hover" popper-class="user-poppover" ref="6">
        <div class="top">
            <p class="entname">{{ companyInfo?.entName }}</p>
            <p class="font-medium user-info">
                <span class="nick-name">{{ userInfo?.nickName }}</span>
                <span style="margin:0 5px;">|</span>
                <span class="mobile">{{ userData?.userMobile }}</span>
            </p>
        </div>
        <div class="user-list">
            <div class="item font-medium" @click="toUrl('/userCenter/accountInfo')">
                <img src="~/assets/images/header/user12x.png" alt="">
                个人中心
            </div>
            <div class="divider"></div>
            <div class="item font-medium" @click="logout">
                <img src="~/assets/images/header/logout2x.png" alt="">
                退出
            </div>
        </div>
        <template #reference>
            <span class="icon-container">
                <img src="~/assets/images/header/user2x.png" style="width:14px;height:16px;" alt="">
            </span>
        </template>
    </el-popover>
</template>

<script setup>
import { useUserStore } from '~/store/user'
import { storeToRefs } from 'pinia'

const props = defineProps({
    userData: {
        type: Object,
        default: {}
    }
})



const visible = ref(false)
const userStore = useUserStore()
// debugger
onBeforeMount(() => {
    userStore.getInfo()
    userStore.getCompanyInfo()
})
const { companyInfo, userInfo } = storeToRefs(userStore)
const company = computed(() => {
    return companyInfo.value
})

const router = useRouter()
const logout = async function () {
    await userStore.logout()
    location.href = '/login'
    // router.push(`/login`)
}


const isReady = ref(false)
onMounted(() => {
    isReady.value = true
})
const toUrl = (url) => {
    location.href = import.meta.env.VITE_ENT_HOST + url
}

</script>

<style scoped>
.top {
    height: 89px;
    background: url("~/assets/images/user-poppover-bg.png") 0px -2px;;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:0 18px;
    box-sizing: border-box;
}

.top p:first-child {
    color: #2B303D;
    line-height: 20px;
    margin-bottom: 8px;
    font-size:14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.top p:last-child {
    font-size: 16px;
    color: #2B303D;
    line-height: 22px;
    font-size:16px;
}
.top .user-info{
    display: flex;
    align-items: center;
}

.top .nick-name{
    max-width:85px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.user-list {
    padding: 8px 0;
}

.user-list .item {
    padding: 0 20px;
    box-sizing: border-box;
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-size:14px;
}

.user-list .item:hover {
    background: rgba(0, 82, 217, 0.1);
}

.user-list .item img {
    margin-right: 6px;
    width: 16px;
    height: 16px;
}

.user-list .divider {
    margin: 5px 15px;
    border: 1px solid #E8ECF3;
}
</style>
<style>
.user-poppover {
    padding: 0px !important;
}

</style>

