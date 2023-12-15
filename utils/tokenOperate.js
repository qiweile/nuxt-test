import Cookies from 'js-cookie'
let TokenKey = 'token'

export function getToken() {
    let isClient = process.client;
    let isServer = process.server;
    if (isClient) {
        return Cookies.get(TokenKey)
    } else {
        return null
    }
}

export function parseCookie(cookieString) {
    const cookies = {};
    if (cookieString) {
        const items = cookieString.split(';');
        items.forEach(item => {
            const parts = item.split('=');
            const key = parts[0].trim();
            const value = parts.slice(1).join('=').trim();
            cookies[key] = decodeURIComponent(value);
        });
    }
    return cookies;
}