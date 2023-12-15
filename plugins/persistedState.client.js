
import { useUserStore } from '@/store/index';

export default defineNuxtPlugin((nuxtApp) => {
    const userStore = useUserStore();

    // 当窗口加载完成时，从 localStorage 中恢复状态
    // window.onNuxtReady(() => {
        const savedState = localStorage.getItem('userState');
        if (savedState) {
            userStore.$patch(JSON.parse(savedState));
        }
    // });
    // 监听状态变化并更新 localStorage
    userStore.$subscribe((mutation, state) => {
        console.log('监听状态变化并更新', state);
        localStorage.setItem('userState', JSON.stringify(state));
    });
});
