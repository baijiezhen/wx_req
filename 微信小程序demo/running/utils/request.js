import apiList from './apiList'   //  引入apiList.js文件

const apiRequest = (params) => {     //接收所需要的参数，如果不够还可以自己自定义参数
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: params.url, // 必须传入的参数
      data: params.data ? params.data : null,
      method: params.method || "GET", // 默认为get 传参 
      header: params.header ? params.header : { 'content-type': 'application/x-www-form-urlencoded' },   
      success: function (res) {
        //接口调用成功
        resolve(res);    //根据业务需要resolve接口返回的json的数据
      },
      fail: function (res) {
        // fail调用接口失败
        reject({ errormsg: '网络错误,请稍后重试', code: -1 });
      }
    })
  });
  return promise;  //注意，这里返回的是promise对象
}


// 音乐接口的调用
let musicList = (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest({ url: apiList.musicList,data:data })) // 传入的实参 
  })
}

export default {
  musicList: musicList
}
