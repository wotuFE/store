import axios from 'axios'
export const get = (url, params = {}, suc, msg = '请求失败') => {

    const options = { url, params }
    axios(url, options).then((res) => {
        suc(res.data);
    }).catch((e) => {
        console.log(e);
        // alert(url + msg);
    })
}
export const post = (url, params, suc, msg) => {
    axios.post(url, params).then((res) => {
        suc(res.data);
    }).catch((e) => {
        console.log(e);
        // alert(url + msg);
    })
}