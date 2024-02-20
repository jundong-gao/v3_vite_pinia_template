import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

class Server {
    // axios实例
    axios_instance: AxiosInstance;

    constructor(baseURL: string = '/') {
        this.axios_instance = axios.create({
            baseURL,
            timeout: 3000,
        })
        // 请求拦截
        this.axios_instance.interceptors.request.use(config => {
            return config
        }, (err: AxiosError) => {
            return Promise.reject(err) // 返回接口错误信息
        })
        // 响应拦截
        this.axios_instance.interceptors.response.use(respose => {
            return respose.data
        }, (err: AxiosError) => {
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
        return this.axios_instance.get(url, {params: data})
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
}


export default new Server()