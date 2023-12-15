<template>
    <div class="demo-range">
        <el-time-picker v-model="value1" is-range range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" />
        <el-button @click="setNumber">数字：{{ aotuNumber }}</el-button>
        <client-only>
            <!-- 只在客户端渲染的内容 -->
            <el-button @click="upDateStore">更新 Store 中的数据：{{ useStore.phoneNumber }}</el-button>
        </client-only>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store'
const useStore = useUserStore()
const aotuNumber = useState('aotuNumber', '0')
const setNumber = () => {
    aotuNumber.value = Math.round(Math.random() * 1000)
}
const value1 = ref([
    new Date(2016, 9, 10, 8, 40),
    new Date(2016, 9, 10, 9, 40),
])
const value2 = ref([
    new Date(2016, 9, 10, 8, 40),
    new Date(2016, 9, 10, 9, 40),
])
const upDateStore = () => {
    useStore.fetchPhoneNumber()
}
onMounted(() => {
    setNumber()
})
/**
 * 此方法只会在服务器端渲染页面时执行
 */
useFetch(async () => {
    await useStore.getData()
});
</script>

<style lang="scss" scoped>
/* .demo-range .el-date-editor {
    margin: 8px;
}

.demo-range .el-range-separator {
    box-sizing: content-box;
} */
</style>