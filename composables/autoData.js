export const useFoo = () => {
    return useState('foo', () => 'bar')
}
export const useFoo2 = () => {
    return useState('autoNum', () => Math.round(Math.random() * 10000000000)+'')
}