//index.js
//获取应用实例
const app = getApp()
// 两种引入方式都可以
// var api = require('../../utils/request.js').default;
import api from "../../utils/request.js"
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text: '这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 60,
    size: 14,
    orientation: 'left',//滚动方向
    intervalTxt: 20 ,// 时间间隔
    imgPic:'../../assets/imgs/b.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },
  getUserInfo: function(e) {
    // console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })
    console.log(api);
    api.musicList({name:'李白'}).then(res => {
       console.log(res)
    })
    
  },
  onShow:function(){
    // 页面显示
    let vm = this;
    console.log(vm)
    var length = vm.data.text.length * vm.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    console.log(length, windowWidth)

    vm.setData({
      length: length,
      windowWidth: windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
    });
    vm.run1();// 水平一行字滚动完了再按照原来的方向滚动
  },
  onHide:function(){
    console.log('onhide')
  }
})
