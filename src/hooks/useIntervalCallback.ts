import { ref } from "vue"

/**
 * 指定时间内执行回调
 * @param delay 多少秒后执行
 * @param callback 要执行的回调函数
 * @returns time 剩余时间
 * @returns handle 执行回调
 */
export function useIntervalCallback(delay: number, callback: (...args: any[]) => void) {
  let time = ref(0)
  let interval: NodeJS.Timeout

  function handle(...args: any[]) {
    if(time.value > 0) return
    calcTime()
    time.value = delay
    callback(...args)
  }


  function calcTime() {
    interval = setInterval(() => {
      time.value--
      if(time.value <= 0) return clearInterval(interval)
    }, 1000)
  }

  return {
    time, handle
  }
}