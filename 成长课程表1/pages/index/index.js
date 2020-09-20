//Page Object
Page({
    data: {
    },
    //options(Object)
    onLoad: function(options){
        this.requestCarouselListData1();
        this.requestCarouselListData2();
    },
    
    requestCarouselListData1() {

        // 调用默认环境数据库的引用
    
        const db = wx.cloud.database()
    
        // tables数据库创建的集合名称
    
        const banner = db.collection('tables')
        
    
        //promise
    
        banner.get().then(res => {
    
            this.setData({
    
              item: res.data
    
            })
    
          })
    
          .catch(err => {
    
            console.log(err)
    
          })

      },
      requestCarouselListData2() {
        const db2 = wx.cloud.database()
        const banner2 = db2.collection('caidan')
        banner2.get().then(res2 => {
    
          this.setData({
  
            item2: res2.data
  
          })
  
        })
  
        .catch(err => {
  
          console.log(err)
  
        })
      },
    onReady: function(){
        
    },
    onShow: function(){
      
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){

    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){

    }
});