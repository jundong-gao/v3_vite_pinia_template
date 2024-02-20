import { defineStore } from 'pinia'

export interface IUser {
    username: string,
    age: number,
    token: string
}
export interface IWeather {
    city: string,
    temperature?: string
}

export interface IState {
    userInfo: IUser,
    address: string,
    weatherInfo: IWeather
}

export const useUserStore =  defineStore('user', {
    state(): IState {
        return {
            userInfo: {} as IUser,
            address: '初始地址',
            weatherInfo: {} as IWeather
        };
    },
    actions: {
        // 设置用户信息
        setUserInfo(userInfo: IUser) {
            this.userInfo = userInfo
        },
        setAddress(address: string) {
            this.address = address  
        }
    },
    getters: {
        // 获取用户信息
        getUserInfo():IUser {
            return this.userInfo
        }
    },
    persist: {
        storage: sessionStorage,
        key: 'gaotiankey', // 浏览器缓存的key 默认store-id
        paths: ['address', 'userInfo', 'weatherInfo.city'], // 需要缓存的字段
        // key(id) {
        //     return `store-${id}`
        // },
        beforeRestore(e) {
            console.log('beforeRestore', e)
        },
        afterRestore(e) {
            console.log('afterRestore', e)
        }
    }
})