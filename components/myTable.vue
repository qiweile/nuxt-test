<template>
    <div style="border: 1px solid #000">
        <div>table中的color：{{ color }}</div>
        <div>兄弟组件中使用数据：{{ num }}</div>
        <div>
            使用 Store 中的数据 {{ useStore.phoneNumber }}
        </div>
        <div>
            使用 useState 中的数据 {{ autoNum }}
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store'
const useStore = useUserStore()
const color = useState('color')
const num = useState('aotuNumber')
const autoNum = useState('useFoo2')
const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    }
])

/**
 * 此方法只会在服务器端执行
 */
useFetch(async () => {
    await useStore.getData()
});
</script>