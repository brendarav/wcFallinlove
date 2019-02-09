// pages/test/test.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quesNum:0,
    realQuesNum:0,
    quesDetail:app.globalData.question[0].question,
    // realOption:0,//真实对应的序号
    optionA:'A',//呈现出来的序号
    optionB:'B',
    optionC:'C',
    answerA: app.globalData.question[0].option.A,
    answerB: app.globalData.question[0].option.B,
    answerC: app.globalData.question[0].option.C,
    scoreA:0,
    scoreB:0,
    scoreC:0,
    list:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    listABC:['A','B','C']//真实序号
  },
    /**自定义混序,生成随机数1或-1*/
    randSort(){
      return Math.random()>0.5?1:-1;
    },
     /**根据混序的结果，重新排列题号*/
   setQuesList(){
     var newList=this.data.list.sort(this.randSort);
     this.setData({
       list:newList
     })
   },
   /**混序，重排选项号*/
  setOptionList() {
    var newList = this.data.listABC.sort(this.randSort);
    this.setData({
      listABC: newList
    })
  },
/**
 * 点击某个选项后的响应
 * 
 */
  tapOption(event){
    // console.log(event);
    var opt=event.currentTarget.dataset.tapOpt;
    var realOpt = this.data.listABC[0];


    if(opt=='A'){
      // console.log(opt);
      this.setData({
        // 设置局部变量realOption标注真实选项
        realOpt: this.data.listABC[0]
      })
    }
    if (opt == 'B') {
      // console.log(opt);
      this.setData({
        // 设置局部变量realOption标注真实选项
        realOpt: this.data.listABC[1]
      })
    }
    if (opt == 'C') {
      // console.log(opt);
      this.setData({
        // 设置局部变量realOption标注真实选项
        realOpt: this.data.listABC[2]
      })
    }
    // 若混序后点击'A'的真实选项是A，A得分+1.B,则B得分+1
    if (this.data.realOpt == 'A') {
      this.setData({
        scoreA: this.data.scoreA + 1,
      })
    }
    if (this.data.realOpt == 'B') {
      this.setData({
        scoreB: this.data.scoreB + 1
      })
    }
    if (this.data.realOpt == 'C') {
      this.setData({
        scoreC: this.data.scoreC + 1
      })
    }
    console.log('ScoreA:' + this.data.scoreA + 'ScoreB:' + this.data.scoreB + 'ScoreC:' + this.data.scoreC);
    console.log('list.length=='+this.data.list.length);
    
    // quesNum取值0-19，0为默认，从array中排除
    //realQuesNum0-19,默认0
    if (this.data.quesNum < this.data.list.length) {
      this.setData({
        realQuesNum: this.data.list[this.data.quesNum],
        quesNum:this.data.quesNum+1
      })
      console.log('quesNum'+this.data.quesNum+'    realQuesNum'+this.data.realQuesNum);
      this.setData({
        quesDetail: app.globalData.question[this.data.realQuesNum].question,
        answerA: app.globalData.question[this.data.realQuesNum].option[this.data.listABC[0]],
        answerB: app.globalData.question[this.data.realQuesNum].option[this.data.listABC[1]],
        answerC: app.globalData.question[this.data.realQuesNum].option[this.data.listABC[2]]

      })
    }else{
      wx.redirectTo({
        url: '../res/res?scoreA=' + this.data.scoreA + '&scoreB=' + this.data.scoreB + '&ScoreC=' + this.data.scoreC
      })
    }
  },
 
  /**
   * 生命周期函数--监听页面加载
   * 打乱问题排序，以及每个问题里的选项排序
   */
  onLoad: function (options) {
    
    console.log('A=' + this.data.scoreA + ' B=' + this.data.scoreB + ' C=' + this.data.scoreC);
    console.log(this.data.list);
    console.log(this.data.listABC);
    this.setQuesList();
    this.setOptionList();
    console.log("混序后：");
    console.log(this.data.list);
    console.log(this.data.listABC);

    console.log('quesNum==' + this.data.quesNum);
    console.log('当前真实题号：' + this.data.realQuesNum);
    
    console.log('数组长度：'+this.data.list.length)
    
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