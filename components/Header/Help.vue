<template>
    <el-popover v-if="isReady" placement="bottom" :width="160" trigger="hover" popper-class="help-poppover">
        <div class="help-list">
            <div class="item font-medium" @click="handleOpenManual">
                <img src="~/assets/images/header/manual12x.png" style="width:16px;height:16px;margin-right:5px" alt="">
                使用手册
            </div>
            <!-- <div class="item">
                <img src="~/assets/images/header/log2x.png" style="width:16px;height:16px;margin-right:5px" alt="">
                更新日志
            </div>
            <div class="item">
                <img src="~/assets/images/header/range2x.png" style="width:16px;height:16px;margin-right:5px" alt="">
                数据范围
            </div> -->
            <div class="item font-medium" @click="toUrl('/agreement')">
                <img src="~/assets/images/header/agreement2x.png" style="width:16px;height:16px;margin-right:5px" alt="">
                政策协议
            </div>
            <div class="item font-medium" @click="handleOpenIntroduce">
                <img src="~/assets/images/header/introduce2x.png" style="width:16px;height:16px;margin-right:5px" alt="">
                平台介绍
            </div>
            <div class="divider" />
            <div class="item item-kf">
                <div class="item-kf-name font-medium">
                    <img src="~/assets/images/header/service2x.png" alt="">在线客服
                </div>
                <img src="~/assets/images/header/custom.png" alt="">
                <div class="tel font-bold">TEL:400-881-7780</div>
            </div>
        </div>
        <template #reference>
            <span class="icon-container">
                <img src="~/assets/images/header/help2x.png" style="width:16px;height:16px;" alt="">
            </span>
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function handleOpenIntroduce() {
    window.open(import.meta.env.VITE_ENT_HOST + '/pdfjs/web/viewer.html?file=https://bt-static-pub.oss-cn-beijing.aliyuncs.com/yiban/%E4%B8%80%E7%8F%AD%E5%B9%B3%E5%8F%B0%E4%BB%8B%E7%BB%8D.pdf')
}
function handleOpenManual() {
    window.open('https://bt-static-pub.oss-cn-beijing.aliyuncs.com/yiban/sysc/sysc.html')
}
const toUrl = (url) => {
    location.href = import.meta.env.VITE_ENT_HOST + url
}
const isReady = ref(false)
onMounted(() => {
    isReady.value = true
})
</script>

<style scoped>
.help-list .item {
    padding: 0 20px;
    box-sizing: border-box;
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    user-select: none
}

.help-list .item:hover {
    background: rgba(0, 82, 217, 0.1);
}

.help-list .item img {
    margin-right: 6px;
    width: 16px;
    height: 16px
}
.help-list .item-kf{
    height: auto;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}
.help-list .item-kf .item-kf-name{
    height: 20px;
    line-height: 20px;
    display: flex;
    align-items: center
}
.help-list .item-kf>img{
    display: inline-block;
    width:120px;
    height:120px;
}
.help-list .item-kf .tel{
    color: #0052D9;
    font-weight:600;
    font-size:14px;
}
.help-list .time {
    line-height: 20px;
    text-align: center;
}

.help-list .btn {
    text-align: center;
    margin: 15px 0;
}

.help-list .divider {
    margin: 5px 15px;
    border: 1px solid #E8ECF3;
}

</style>
<style>
.help-poppover {
    padding: 0px !important;
    min-width: 118px!important;
}
</style>
