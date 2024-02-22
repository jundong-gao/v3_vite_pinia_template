/**
 * 创建uuid
 * @returns {string} uuid
 */
export const useUUID = (): string => {
    let d = Date.parse(String(new Date()));
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now();
    }
    let uuid = 'xxxgxxxx-xjxx-xxdx-xxxxxxx-xxxxxx-xxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d / 16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    })
    return uuid
}