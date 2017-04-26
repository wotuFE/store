import axios from 'axios'
export const get = (url, params = {}, suc, msg = '请求失败') => {

    const options = { url, params }
    axios(url, options).then((res) => {
        if (res.data.code =='666') {
            suc(res.data);
        } else {
            alert(res.data.resMsg);
        }
        
    }).catch((e) => {
        console.log(e);
        // alert(url + msg);
    })
}
export const post = (url, params, suc, msg) => {
    axios.post(url, params).then((res) => {
        if (res.data.code=='666') {
            suc(res.data);
        } else {
            alert(res.data.resMsg);
        }
    }).catch((e) => {
        console.log(e);
        // alert(url + msg);
    })
}