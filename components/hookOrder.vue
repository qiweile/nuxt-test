<template></template>
<script setup>
onBeforeMount(() => {
    console.log('onBeforeMount', '执行了--');
})
onMounted(() => {
    console.log('onMounted', '执行了--');
})
onUpdated(() => {
    console.log('onUpdated', '执行了--');
})
onUnmounted(() => {
    console.log('onUnmounted', '执行了--');
})
onBeforeUpdate(() => {
    console.log('onBeforeUpdate', '执行了--');
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount', '执行了--');
})
onErrorCaptured(() => {
    console.log('onErrorCaptured', '执行了--');
})
onRenderTracked(() => {
    console.log('onRenderTracked', '执行了--');
})
onRenderTriggered(() => {
    console.log('onRenderTriggered', '执行了--');
})
onActivated(() => {
    console.log('onActivated', '执行了--');
})
onDeactivated(() => {
    console.log('onDeactivated', '执行了--');
})
onServerPrefetch(() => {
    console.log('服务端渲染时调用-执行了--onServerPrefetch');
})

</script>

<style scoped></style>