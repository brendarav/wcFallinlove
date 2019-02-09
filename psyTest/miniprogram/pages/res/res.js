// pages/res/res.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  judgeFun(){
    if (this.data.A > this.data.B && this.data.A > this.data.C) {
      return "听觉型"
    } else if (this.data.B > this.data.A && this.data.B > this.data.C) {
      return "动觉型"
    } else if (this.data.C > this.data.A && this.data.C > this.data.B) {
      return "视觉型"
    } else if (this.data.A == this.data.B && this.data.A > this.data.C) {
      return "听觉动觉均衡型"
    } else if (this.data.A > this.data.B && this.data.A == this.data.C) {
      return "听觉视觉均衡型"
    } else if (this.data.A < this.data.B && this.data.B == this.data.C) {
      return "听觉视觉均衡型"
    } else {
      return "均衡型"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    console.log(options.A);
    this.setData({
      ScoreA:this.options.A,
      ScoreB:this.options.B,
      ScoreC:this.options.C,
      judge:this.judgeFun()
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