export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        // 处理错误，例如上报到一个服务
        console.log('errorHandler:处理错误，例如上报到一个服务', error);
    }

    // 也可以这样
    nuxtApp.hook('vue:error', (error, instance, info) => {
        // 处理错误，例如上报到一个服务
        console.log('vue:error:处理错误，例如上报到一个服务', error);
    })
})