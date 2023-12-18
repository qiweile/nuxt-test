import { parseCookie } from '@/utils/tokenOperate'
export default async function useSsrGet  (dName,api,apiParams={},apiOpt={}) {
    const { data } = await useAsyncData(dName, async () => {
        const cookies = useRequestHeaders(['cookie'])
        let cookieObj = parseCookie(cookies.cookie)
        if (cookieObj) {
            let res = await api(apiParams, {
                headers: {
                    Authorization: 'Bearer ' + cookieObj.token,
                },
                ...apiOpt
            })
            return JSON.stringify(res)
        }
    })
    return {
        data
    };
}