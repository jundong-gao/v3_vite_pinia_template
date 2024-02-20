/**
 * axios请求默认返回格式
 * @param err {Number} 返回状态
 * @param data {T} 返回数据
 */
export interface INormalResponse<T> {
    err?:number,
    data: T,
}