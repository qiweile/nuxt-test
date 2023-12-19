import { defineStore } from 'pinia';
import { getUserInfo, getCompanyInfo } from '@/api'
import http from '@/http'
import useSsrGet from '@/hooks/useSsrHook'
export const useUserStore = defineStore('user', {
    state: () => ({
        phoneNumber: null,
        userData: {},
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
        setCompanyInfo(data) {
            this.companyInfo = data
        },
        // 用户信息
        async getUserInfo() {
            let {data,code,message} = await getUserInfo()
            this.userData = data
        },
        setUserData(data) {
            this.userData = data
        }
    },
});