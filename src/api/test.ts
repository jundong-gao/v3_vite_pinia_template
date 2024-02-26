import server from '@/utils/axios'
import { INormalResponse } from '@/types/global'
export const test = (data?: {page: number, pageSize: number} | object) => {
    return server.get<INormalResponse<{id: number, name: string}[]>>('http://mock.gaojundong.com/info/list', data)
}