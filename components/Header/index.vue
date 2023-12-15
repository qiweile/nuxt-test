<template>
    <div class="headerMain flex mg-l-20 mg-r-20">
        <div class="left flex1">
        </div>
        <div class="right"></div>
    </div>
</template>
<script setup>
import { parseCookie } from '@/utils/tokenOperate'
import http from '@/http'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
const userStore = useUserStore()
onBeforeMount(() => {
    // 获取公司信息
    // let res = userStore.getCompanyInfo();
})
/**
 * @method useAsyncData
 * 服务端渲染时使用的 API
 */
const { data } = useAsyncData('http://api.szpt.baiten.cn/com/api/comm/getlogininformation', () => {
    const cookies = useRequestHeaders(['cookie'])
    if (cookies.cookie.indexOf('token') > -1) {
        let cookieObj = parseCookie(cookies.cookie)
        return cookieObj.token
    }
})
console.log(data.value, 'MMM');
/**
 * 此方法只会在服务器端执行
 */
useFetch(() => {

});
</script>

<style lang="scss" scoped>
// .headerMain {}
</style>