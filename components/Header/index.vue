<template>
    <div class="headerMain flex mg-l-20 mg-r-20">
        <div class="left flex1">
            <div class="logo">
                <span class="font-medium">{{ companyData.data.entName }}</span>
                <span class="member">logo</span>
            </div>
        </div>
        <div class="right">
            <RightCom />
        </div>
    </div>
</template>
<script setup>
import { getCompanyInfo } from '@/api'
import { useUserStore } from '@/store'
import RightCom from './RightCom.vue'

import useSsrGet from '@/hooks/useSsrHook'
const userStore = useUserStore()
const nuxtApp = useNuxtApp()
onBeforeMount(() => {
    let {data} = JSON.parse(nuxtApp.payload.data.companyInfo)
    // 把公司信息本地缓存
    userStore.setCompanyInfo(data);
})
/**
 * 获取功能信息
 */
const companyInfo = await useSsrGet('companyInfo', getCompanyInfo)
const companyData = JSON.parse(companyInfo.data.value)

</script>

<style lang="scss" scoped>
.headerMain {
    .logo {
        height: 56px;
        .font-medium {
            margin-left: 5px;
            margin-right: 24px;
            font-size: 24px;
            font-family: Alibaba-PuHuiTi-Bold;
            font-weight: bold;
            color: #3C455C;
            line-height: 56px;
        }
    }
}
</style>