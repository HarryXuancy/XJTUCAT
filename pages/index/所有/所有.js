var app = getApp()
 Page({
data: { 
 catlistdongqu: [
{ name:"胖虎"},{ name:"渣贵"},{ name:"小怂包"},{ name:"小中分"},{ name:"狗蛋儿"},{ name:"喵桑"},{ name:"花妹妹"},{ name:"馆长"},{ name:"贵族妹妹"}, 
 ], 
 catlistxiqu: [
{ name:"豹纹"},{ name:"博士"},{ name:"大呆"},{ name:"二宁"},{ name:"烦烦"},{ name:"黑狸"},{ name:"横眉"},{ name:"虎纹"},{ name:"蒲公英"},{ name:"小狼崽"},{ name:"小宁"},{ name:"小椅子"},{ name:"sunshine"},{ name:"不苦"},{ name:"大胖橘"},{ name:"二黄"},{ name:"掘地武士"},{ name:"面包"},{ name:"闹闹"},{ name:"委屈屈"},{ name:"刀哥"},{ name:"葛优"},{ name:"咕咕"},{ name:"咪咪"},{ name:"墨翠"},{ name:"花漂亮"},{ name:"杰克船长"},{ name:"罗恩"},{ name:"抹布"},{ name:"薛定谔"},{ name:"纯黑"},{ name:"大白"},{ name:"小黑"},
    ],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    url: app.globalData.url,
    navbar: ['东区','西区'],
    currentTab: 0,
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  iconType: [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ],

  onPullDownRefresh:function(){
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

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    console.log("e.detail.value");
    if(e.detail.value) {
    
    wx.navigateTo({
      url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
    })
  }
  }


})

