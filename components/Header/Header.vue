<template>
    <div class="header">
        <div class="header-left" @click="handleGotoHome">
            <span class="font-medium">{{ company?.entName }}</span>
            <img src="~/assets/images/header/logo.svg" class="logo">
            <span class="member">{{ data }}</span>
        </div>
        <div class="header-right">
            <RightCom />
        </div>
    </div>
</template>

<script setup>
import RightCom from './RightCom.vue'
import { getCompanyInfo } from '~/api/user'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const { companyInfo, userInfo } = storeToRefs(userStore)
const company = computed(() => {
    return companyInfo.value
})
const data = ref('')
function handleGotoHome() {
    location.href = '/';
}
onBeforeMount(() => {
    getCompanyInfo().then(res => {
        data.value = res.data.serverType
    })
    // 获取用户专利空间权限
    userStore.getAppList();
})
</script>

<style scoped>
.header {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d1d1d1;
    box-sizing: border-box;
    padding: 0 20px;
    background-color: #fff;
    flex-shrink: 0;
}

.header .header-left {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.header .header-left .logo {
    width: 33px;
    height: 22px;
}

.header .header-left .member {
    position: relative;
    margin-left: 16px;
    padding-left: 15px;
    padding-right: 10px;
    height: 24px;
    line-height: 24px;
    color: #4F6183;
    font-size: 14px;
    font-family: 'Alibaba-PuHuiTi-Medium';
    background: #ECF2FE;
    border-radius: 13px 0px 13px 0px;
    box-sizing: border-box;
}

.header .header-left .member:before {
    content: "";
    position: absolute;
    left: -12px;
    width: 24px;
    height: 24px;
    background: url('~/assets/images/header/diamond.png') no-repeat;
    background-size: cover;
}

.font-medium {
    margin-left: 5px;
    margin-right: 24px;
    font-size: 24px;
    font-family: Alibaba-PuHuiTi-Bold;
    font-weight: bold;
    color: #3C455C;
    line-height: 56px;
}</style>

