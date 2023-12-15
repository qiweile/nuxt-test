import http from '@/http'
// 获取 logo 套餐类型
export function getCompanyInfo() {
    return http.get('/com/api/comm/getlogininformation')
}
