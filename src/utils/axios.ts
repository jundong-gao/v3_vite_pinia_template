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

    public get<T>(url:string, data:any = {}):Promise<T> {
        return this.axios_instance.get(url, {params: data})
    }

    public post<T>(url: string, data:any = {}):Promise<T> {
        return this.axios_instance.post(url, data)
    }

    public fetch<T>(config: AxiosRequestConfig):Promise<T> {
        return this.axios_instance(config)
    }
}


export default new Server()