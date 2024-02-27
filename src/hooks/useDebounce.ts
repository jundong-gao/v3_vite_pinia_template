/**
 * 防抖函数
 * @param {Function} func 
 * @param {Number} delay 单位(ms) 默认值200
 * @returns {Function} function
 */
export function useDebounce<T extends (...args: any[]) => void> (func: T, delay: number = 200): T {
    let timer:number = 0
    return function(this:unknown, ...args: any[]) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay) as unknown as number
    } as T
}