export const baseUrl = 'http://127.0.0.1:9999/store';
export const initConfig = () => {
    // 所有的alert都变成了console.log
    window.alert = window.console.log;
    // 使字符串也有toFixed方法
    String.prototype.toFixed = function(num) {
        return Number(this).toFixed(num);
    }
}