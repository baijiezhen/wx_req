
import apiList from './apiList'   //  引入apiList.js文件
// params = {
//     url:url,
//     data:data,
//     method:"GET", 
//     header:header
// }



const apiRequest = (params) => {     //接收所需要的参数，如果不够还可以自己自定义参数
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: params.url, // 必须传入的参数
      data: params.data ? params.data : null,
      method: params.method || "GET", // 默认为get 传参 
      header: params.header ? params.header : { 'content-type':'application/x-www-form-urlencoded'},
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


//登录接口的调用
let login = (data)=>{
  return new Promise((resolve, reject) => {
    resolve (  apiRequest( {url:apiList.login,data:data} ) ) // 传入的实参 
  })
}
//注册接口的调用
let register= (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest({url:apiList.register,data}))
  })
}

//最后需要将具体调用的函数暴露出，给具体业务调用

export default {
  login: login,
  register: register
}




// 页面中引用 
var api = require('./request.js').default;
//登录点击事件
login(){
  /**
  *用户输入校验
    TODO
  */
  let params = {
    username:'xxx',
    password:'xxx'
  } 
  // 实参 
  api.login(params).then(res=>{
      //   这里是形参 
      console.log(res)     //API返回的数据
      //业务处理
  })
}


const fun1 = () => {
    let promise = new Promise(function(resolve,reject){
        resolve('我是promise里面传过来的参数')
    })
    return promise;
}
let fun2 = (data) => {
     let promise1 = new Promise(function(resolve,reject){
       let promiseObj = fun1(); // promise对象
        resolve( promiseObj );
     })
     return promise1;
}
fun2().then((res)=> {
     console.log(res);
})


var func1 = (callback)=> {
  console.log(1);
  var num = Math.ceil(Math.random()*10);
  console.log(num);
  callback && callback(num);
}
var func2 = (res)=> {
    console.log(res,2222222);
}
func1((res)=> {
    console.log(res,11111111);
    func2(res);
})

var func1 = ()=> {
   var p = new Promise(function(resolve,reject){
       var num = Math.ceil(Math.random()*10); 
       console.log(num,'我是func1中的num值');
       resolve(num) // 传入的实参
   })
   return p;
}
var func2 = (res)=> {
   var p = new Promise(function(resolve,reject){
       res && console.log(res,'我是调用方法2穿过来的res,即num值');
       resolve(res);
   })
   return p;
}
func1().then(res=> {
    console.log(res,'我是传过来的num值') // 接受的形参
    return func2(res);
}).then(res=> {
   console.log(res,222222)
})

// 解决异步回调的问题
function func1(callback){
   var num = Math.random()*10;
   console.log(num);
   callback && callback(num);
}
function func2(num){
    console.log(num,'我是传过来的');
}
func1(func2);

