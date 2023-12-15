<template>
    <div class="headerMain flex mg-l-20 mg-r-20">
        <div class="left flex1">
            <div class="logo">
                Page visits: {{ data }}
                <!-- <span class="font-medium">{{ 'company?.entName' }}</span> -->
                <!-- <img src="~/assets/images/header/logo.svg" class="logo"> -->
                <!-- <span class="member">{{ 'data' }}</span> -->
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>
<script setup>
import { parseCookie } from '@/utils/tokenOperate'
import { getCompanyInfo } from '@/api'
// import { ssrGetData } from '@/http/server'
import http from '@/http'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
const userStore = useUserStore()
const nuxtApp = useNuxtApp()
onBeforeMount(() => {
    console.log(nuxtApp.payload.data)
    // 获取公司信息
    // let res = userStore.getCompanyInfo();
})

const {data} = await useAsyncData('aaaData', async () => {
    const cookies = useRequestHeaders(['cookie'])
    let cookieObj = parseCookie(cookies.cookie)
    if(cookieObj) {
        let res = await getCompanyInfo({}, {
            headers: {
                Authorization: 'Bearer ' + cookieObj.token,
            }
        })
        return JSON.stringify(res)
    }
})
</script>

<style lang="scss" scoped>
.headerMain {
    .logo {
        height: 56px;
    }
}
</style>