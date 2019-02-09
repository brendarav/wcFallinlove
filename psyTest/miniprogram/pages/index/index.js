//index.js
const app = getApp()

Page({
  data: {
   
  },

  onLoad: function() {
    // if (!wx.cloud) {
    //   wx.redirectTo({
    //     url: '../chooseLib/chooseLib',
    //   })
    //   return
    },
    startTap(e){
      wx.redirectTo({
        url: '../test/test',
      })
    }

    // 获取用户信息
    
  })

  


 


