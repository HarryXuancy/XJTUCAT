var app = getApp()
 Page({
data: { 
 fostered_catlist: [
{ name:"lucky"},
{ name:"龙龙"},
{ name:"七七"},
{ name:"香香"},
{ name:"小三花"},
{ name:"小小黑"},
{ name:"小眼屎"},
],
 unknown_catlist: [
{ name:"花姐姐"},
{ name:"白白"},
{ name:"白手套"},
{ name:"白围脖"},
{ name:"大黄"},
{ name:"地图"},
{ name:"点点鼻"},
{ name:"红鼻子"},
{ name:"蝴蝶结"},
{ name:"橘子"},
{ name:"冷漠"},
{ name:"栗子"},
{ name:"三角板"},
{ name:"小花"},
{ name:"一腿白黑狸"},
],
 dead_catlist: [
{ name:"警长"},
{ name:"车车"},
{ name:"黑仔"},
{ name:"暖暖"},
{ name:"三七分"},
{ name:"小橘"},
{ name:"小桃心"},
],
 boarding_catlist: [
{ name:"媒婆"},
{ name:"假面"},
{ name:"Re8"},
{ name:"球球"},
{ name:"糖糖"},
{ name:"跳跳"},
],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    navbar: ['在校', '毕业', '休学', '喵星','留学'],
    currentTab: 0,
    url: app.globalData.url,
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  iconType: [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ],

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  //转发跳转页面设置
  onLoad: function (options) {
    if (options.pageId) {
      wx.navigateTo({
        url: '/pages/cats/' + options.pageId + '/' + options.pageId,
      })
    }
  },

  //转发此页面的设置
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  // 转发到朋友圈
  onShareTimeline: function (res) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    console.log("e.detail.value");
    if (e.detail.value) {
      wx.navigateTo({
        url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
      })
    }
  },
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '北大猫协',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },

})

