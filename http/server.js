import { parseCookie } from '@/utils/tokenOperate'
/**
 * @method useAsyncData
 * 服务端渲染时获取 token 使用的 API
 */
export function ssrGetData(funcName,cb,params={},options={}) {
    return useAsyncData(funcName, async () => {
        const cookies = useRequestHeaders(['cookie'])
        if (cookies.cookie.indexOf('token') > -1) {
            let cookieObj = parseCookie(cookies.cookie)
            return await cb(params, {
                headers: {
                    Authorization: 'Bearer ' + cookieObj.token,
                },
                ...options
            })
        } else {
            return await cb(params, options)
        }
    })
}
