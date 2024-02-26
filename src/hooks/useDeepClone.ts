export const useDeepClone = (obj: any) => {
  if(typeof obj == 'object'){
    if(obj == null) return obj;
    if(obj.constructor == Array){
        let newArr = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            newArr.push(obj[i])
        }
        return newArr;
    }else{
        let newObj = {} as Record<any, any>;
        for(let key in obj){
            newObj[key] = useDeepClone(obj[key])
        }
        return newObj;
    }
}else{
    return obj;
}
}
