import { computed } from 'vue'

export function useVModel<T extends object>(props: Record<string, any>, propsName: string, emit:ReturnType<typeof defineEmits> ) {
    let model = computed({
        get() {
            const proxy = new Proxy(props[propsName], {
                get(target, key) {
                    return target[key]
                },
                set(target, key, value){
                    emit(`update:${propsName}`, {
                        ...target,
                        [key]: value
                    })
                    return true
                }
            })
            return proxy
        },
        set(val) {
            emit(`update:${propsName}`, val)
        }
    }) as T
    return model
}