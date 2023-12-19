const BASE_URL = 'http://api.szpt.baiten.cn'//import.meta.env.VITE_BASE_API;
// console.log(BASE_URL);
// const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig,'配置中的数据');
import {getToken} from '@/utils/tokenOperate'

class HttpRequest {
    request(url, method, data, options) {
        return new Promise(async (resolve, reject) => {
            const token = getToken() || '';
            const newOptions = {
                baseURL: BASE_URL,
                method: method,
                headers: {
                    Authorization: 'Bearer ' + token,
                },
                ...options,
            };
            if (method === "GET" || method === "DELETE") {
                newOptions.params = data;
            }
            if (method === "POST" || method === "PUT") {
                newOptions.body = data;
            }
            useFetch(url, newOptions).then(({ data: { value: { code, data, message } }, pending, refresh }) => {
                resolve({ code, data, message, pending, refresh });
            }).catch(({ pending, error, refresh }) => {
                reject({ pending, error, refresh });
            });
        });
    }

    // 封装常用方法
    get(url, params, options) {
        return this.request(url, "GET", params, options);
    }

    post(url, params, options) {
        return this.request(url, "POST", params, options);
    }

    put(url, params, options) {
        return this.request(url, "PUT", params, options);
    }

    delete(url, params, options) {
        return this.request(url, "DELETE", params, options);
    }
}

const http = new HttpRequest();

export default http;