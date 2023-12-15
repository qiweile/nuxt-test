<template>
    <div class="defLayout">
        <nHeaderVue></nHeaderVue>
        <slot />
        <!-- 没有任何内容只展示了vue3 的钩子执行顺序 -->
        <!-- <hookOrder></hookOrder> -->
    </div>
</template>
<script setup>
import nHeaderVue from '~/components/Header';

const color = ref("red")
const autoColor = () => {
    let str = '#' + Math.random(10).toString(16).slice(2, 8)
    color.value = str
}
</script>

<style lang="scss" scoped>
.defLayout {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
</style>