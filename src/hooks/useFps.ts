import { Ref, ref } from 'vue'

export interface IFpsOptions {
    /**
     * 间隔帧数 
     * @dafault 10
     */
    delay: number,
    /**
     * 是否持续获取 
     * @dafault true
     */
    infinite: boolean
}

/**
 * 计算帧率(fps)
 * @param  { Object } options
 * @param  { Object } options.delay 延迟帧数
 * @param  { Object } options.infinite 是否持实时更新
 * @returns { Object }
 *  - fps 帧率
 *  - destory 销毁函数
 *  - restart 重新计算
 */
export const useFps = (options: IFpsOptions = {delay: 10, infinite: true} ): {fps: Ref<number>, destory: (...args:any[]) => void, restart: (...args: any[]) => void} => {
    let fps = ref(0)
    let delay = options.delay
    let reqId = ref(0)
    let doing = ref(false)

    let last = performance.now()
    let tiks = 0 // 计数器
    const update = () => {
        tiks+=1
        if(tiks > delay) {
            const now = performance.now()
            const diff = now - last
            fps.value = Math.round(1000 / (diff / tiks))
            last = now
            tiks = 0
            doing.value = false
            if(!options.infinite) return destory()
        }
        reqId.value = requestAnimationFrame(update)
    }

    reqId.value = requestAnimationFrame(update)


    function destory ()  {
        doing.value = false
        cancelAnimationFrame(reqId.value)
    }

    function restart() {
        if(doing.value) return
        doing.value = true
        reqId.value = requestAnimationFrame(update)
    }
    
    return {
        fps,
        destory,
        restart
    }
}