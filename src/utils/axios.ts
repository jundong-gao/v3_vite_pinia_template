import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, Canceler, CreateAxiosDefaults } from 'axios';
import { ElMessage } from 'element-plus';

class Server {
    // axios实例
    private axios_instance: AxiosInstance;
    private cancel: Canceler | null

    constructor(config: CreateAxiosDefaults) {
        this.cancel = null
        this.axios_instance = axios.create({
            ...config,
            cancelToken: this.setCancelToken()
        })
        this.setInterceptor()
    }

    private setCancelToken() {
        return new axios.CancelToken((cancel) => {
            this.cancel = cancel
        })
    }

    private setInterceptor() {
        // 请求拦截
        this.axios_instance.interceptors.request.use(config => {
            return config
        }, (err: AxiosError) => {
            return Promise.reject(err) // 返回接口错误信息
        })
        // 响应拦截
        this.axios_instance.interceptors.response.use(respose => {
            
            // 根据返回状态码判断，是否需要全局弹窗
            // if(respose.data.code !==  200) {
            //     ElMessage.error(respose.data?.message || '网络错误')
            // }
            
            return respose.data
        }, (err: AxiosError) => {
            let message = err.message
            if(axios.isCancel(err)) {
                console.log('请求被取消::::::::::::::::', err.message)
            }else{
                ElMessage.error(message)
            }
            return Promise.reject(err)
        })
    }

    /**
     * get请求
     * @param url 请求地址
     * @param data 入参
     * @returns promise
     */
    public get<T>(url:string, data:any = {}):Promise<T> {
        let json: AxiosRequestConfig = {
            params: {
                ...data
            },
            cancelToken: undefined
        }
        if(json.params.cancelToken) {
            json.cancelToken = data.cancelToken
            delete json.params.cancelToken
        }

        return this.axios_instance.get(url, json)
    }

    /**
     * post请求
     * @param url 请求地址
     * @param data  请求体
     * @returns promise
     */
    public post<T>(url: string, data:any = {}):Promise<T> {
        return this.axios_instance.post(url, data)
    }

    /**
     * 网络请求
     * @param config axios请求配置
     * @returns promise
     */
    public fetch<T>(config: AxiosRequestConfig):Promise<T> {
        return this.axios_instance(config)
    }

    /**
     * 取消所有请求
     * @returns void
     */
    public cancelAllRequest(message?: string) {
        this.cancel!(message)
        this.axios_instance.defaults.cancelToken = this.setCancelToken()
    }
}


export default new Server({
    baseURL: '/',
    timeout: 15000
})