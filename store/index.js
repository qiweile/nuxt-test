import { defineStore } from 'pinia';
// import http from '@/http'
import useSsrGet from '@/hooks/useSsrHook'
export const useUserStore = defineStore('user', {
    state: () => ({
        phoneNumber: null,
        user: {},
        companyInfo: {}
    }),
    actions: {
        async fetchPhoneNumber() {
            this.phoneNumber = await Math.round(Math.random() * 10000000000)
        },
        async getData() {
            this.phoneNumber = 15
        },
        async login() {
            // let params = {
            //     loginType: "PASSWORD",
            //     password: "123456",
            //     username: "15336572774"
            // }
            // let { code, data, message, pending, refresh } = await http.post('/authweb/login/token', params)
            // console.log(pending.value);
            // this.user = data.value
        },
        getCompanyInfo(data) {
            this.companyInfo = data
        }
    },
});