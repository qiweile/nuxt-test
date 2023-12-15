<template>
    <div class="mainBox">
        <div class="mg-l-20 icon">
            <i class="iconfont icon-shujushouquan"></i>
        </div>

        <div>
            父组件中使用了子组件定义的数据：{{ num }}
        </div>
        <el-button @click="autoColor" class="text">按钮颜色 {{ color }}</el-button>
        <myTable></myTable>
    </div>
    全局数据：{{ foo }}
    <el-button @click="getData" type="primary" class="text">请求1</el-button>
    <div class="wx100">
        <mytime></mytime>
    </div>
    <AppHeader />
</template>
<script setup>
definePageMeta({
    layout: "defaut-list"
});
// 获取 nuxt.config.ts 中 runtimeConfig 的配置
const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig);
import { useUserStore } from '@/store'

const useStore = useUserStore()
/**
 * nuxt 状态管理 API
 * useState('x')
 * 注意：数字是不能被格式化的
 */
const color = useState('color', '')
const autoColor = () => {
    let str = '#' + Math.random(10).toString(16).slice(2, 8)
    color.value = str
}

// 获取数据
const getData = () => {
    // http
}



// 在子组件中定义的数据
const num = useState('aotuNumber')
/**
 * 全局数据
 */
const foo = useFoo()
onMounted(() => {
    autoColor()
})

/**
 * 此方法只会在服务器端执行
 */
useFetch( () => {
    // useStore.login()
});
</script>

<style lang="scss" scoped>
.mainBox {
    border: 1px solid #D05857;

    .icon {
        width: 40px;
        height: 20px;
        background: v-bind(color);
    }

    .text {
        color: v-bind(color);
    }
}
</style>