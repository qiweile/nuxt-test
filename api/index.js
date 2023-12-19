import http from '@/http'
// 获取 logo 套餐类型
export function getCompanyInfo(params, options) {
    return http.get('/com/api/comm/getlogininformation', params, options)
}
// 获取当前用户信息
export function getUserInfo() {
    return http.get('/enc/api/entcenter/btehrstaff/currentuser')
}