import server from '@/utils/axios'
import { INormalRequest, INormalResponse } from '@/types/global'
export const test = (data?: {page: number, pageSize: number} | object) => {
    return server.get<INormalResponse<{id: number, name: string}[]>>('https://mock.gaojundong.com/info/list', data)
}

export const testSleep = (data?: INormalRequest<{time: number}>) => {
    return server.get<INormalResponse<any>>('https://mock.gaojundong.com/random/sleep', data)
}