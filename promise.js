var p1 = new Promise(function(resolve,reject){
    let flag = Math.random()*10 
    flag > 5 ? resolve( flag +'我是比5大的数字') : reject(flag+'我是比5小的数字');
})
p1.then(function(res){
     console.log(res)
     return 1;
}).then(function(res){
     console.log(res)
     return "hello"
}).then((res)=> {
     console.log(res);
})

var p1 = new Promise(function(resolve,reject){
    let flag = Math.random()*10 
    flag > 5 ? resolve( flag +'我是比5大的数字') : reject(flag+'我是比5小的数字');
})
p1.then(function(res){
     console.log(res)
     let promise1 = new Promise(function(resolve,reject){
          setTimeout(resolve('hello111'),200)
     })
     return promise1;
}).then(function(res){
     console.log(res)
     return "hello"
}).then((res)=> {
     console.log(res);
})



var p1 = new Promise(function(resolve,reject){
    let flag = Math.random()*10 
    flag > 5 ? resolve( flag +'我是比5大的数字') : reject(flag+'我是比5小的数字');
})
var p1 = new Promise(function(resolve,reject){
    let flag = Math.random()*10 
    flag > 5 ? resolve( flag +'我是比5大的数字') : reject(flag+'我是比5小的数字');
})
var func = () => { 
    return new Promise(function(resolve,reject){
        resolve(p1);
    })  
}
func().then(res => {
     console.log(res);
}).catch(err => {
     console.log(err);
})

const func1 = () => {
     return new Promise(function(resolve,reject){
          resolve(123);
     })
}
console.log(func1());
const func2 = () => {
     return new Promise(function(resolve,reject){
        resolve(func1());
     })
}
func2().then(res => {
     console.log(res);
})
