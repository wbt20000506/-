// pages/shiting/shiting.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  submit(res){

    var time=res.detail.value.time;

    db.collection("qingjia").add({
      data:{
        
        time:time
        
        
      }
    }).then(res=>{
      console.log(res)
    })
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      logs:  Y + "-" + M + "-" + D,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

var timestamp =
 Date.parse(new Date());
//返回当前时间毫秒数
timestamp = timestamp / 1000;
 
 
//获取当前时间
 
var n = timestamp *
  1000;
 
 
var date = new Date(n);
 
 
//年
 
 
var Y =
  date.getFullYear();
 
 
//月
 
 
var M = (date.getMonth()
  + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//日
var D = date.getDate()
  < 10 ? '0' + date.getDate() :
  date.getDate();
