<template>
    <el-popover v-if="isReady" placement="bottom" :width="950" trigger="hover" popper-class="app-poppover">
        <div class="app-poppover-container">
            <div v-for="(item, index) in appList" :key="index" class="card" @click="handleLink(item)">
                <div class="icon-container">
                    <img :src="item.icon" style="width:28px;height:28px;" alt="">
                </div>
                <div class="app-info">
                    <div class="title">{{ item.title }}</div>
                    <div class="desc">{{ item.desc }}</div>
                </div>
            </div>
        </div>
        <template #reference>
            <p class="font-medium text-btn">
                <img src="~/assets/images/header/application2x.png" alt="">
                应用中心
            </p>
        </template>
    </el-popover>
</template>

<script setup>
import { ElMessage } from 'element-plus'

import { useRouter } from 'vue-router'
const router = useRouter()
const isReady = ref(false)

const props = defineProps({
    userData: {
        type: Object,
        default: () => {}
    }
})

onMounted(() => {
    isReady.value = true
})
function handleLink(item) {
    if (!props.userData.userMobile) {
        ElMessage.error('请完善手机号码！')
        location.href = import.meta.env.VITE_ENT_HOST + '/userCenter/accountInfo'
        return
    }
    if (item.pathName) {
        router.push({ path: item.pathName })
    } else if (item.link) {
        location.href = item.link
    }
}
const appList = ref([
    {
        title: '专利检索',
        desc: '1.9亿+全球专利要盖103个国家/地区',
        icon: 'jiansuo2x',
        pathName: '/patsearch/patent-search-home',
        checkName: 'PAT_SEARCH'
    },
    {
        title: '企业检索',
        desc: '描绘中国创新型企业画像',
        icon: 'jiansuoqiye2x',
        // pathName: '/enterprise',
        link: import.meta.env.VITE_BASE_SO + '/enterprise',
        checkName: 'ENT_SEARCH'
    },
    {
        title: '企业中心',
        desc: '管理知识产权、专利年费、专利动态',
        icon: 'qiyezhongxin2x',
        link: import.meta.env.VITE_ENT_HOST + '/entCenter/myCompany',
        // pathName: '/entCenter/myCompany',
        checkName: 'ENT_CENTER_MY'
    },
    {
        title: '产业链',
        desc: '涵盖50+产业的核心企业、专利等资源',
        icon: 'chanyelian2x',
        link: import.meta.env.VITE_ENT_HOST + '/industryChain/typeLib',
        // pathName: '/industryChain/typeLib',
        checkName: 'INDUSTRY_CHAIN'
    }
])
</script>
<style scoped>
.app-poppover-container {
    padding: 32px;
    display: flex;
    flex-wrap: wrap;
}

.app-poppover-container .card {
    width: 280px;
    height: 80px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    border: 1px solid #DCDCDC;
    cursor: pointer
}

.app-poppover-container .card:nth-child(3) {
    margin-right: 0px;
}

.app-poppover-container .card:hover {
    border: 1px solid #0052D9;
    box-shadow: 0 4px 8px #003a9b24
}

.app-poppover-container .card .icon-container {
    width: 40px;
    height: 40px;
    background-color: #F1F2F6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    flex-shrink: 0;
}

.app-poppover-container .card .icon-container .icon {
    width: 28px;
    height: 28px;
}

.app-poppover-container .card .app-info .title {
    font-size: 16px;
    font-weight: 700;
    color: #2b303d;
    margin-bottom: 4px;
    line-height: 22px
}

.app-poppover-container .card .app-info .desc {
    font-size: 12px;
    color: #2b303d99;
    line-height: 18px
}
</style>
<style>
.app-poppover {
    padding: 0px !important;
}
</style>
