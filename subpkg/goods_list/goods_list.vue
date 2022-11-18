<!-- 商品列表页面 -->
<template>
  <view>
   <!-- 商品父盒子 -->
   <view class="goods_list">
     <!-- 循环遍历每一项 -->
     <view v-for="(goods, i) in goodsList" :key="i" @click="gotoDetail(goods)">
     <my-goods :goods="goods"></my-goods>
     </view>
   </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 定义获取参数对象，用来获取点击商品传递过来的商品列表参数
        queryObj: {
          // 关键字
          query: '',
          // 分类id
          cid: '',
          // 页面
          pagenum: 1,
          // 容量
          pagesize: 10
        },
        // 商品数据列表
        goodsList: [],
        // 总数据：用来实现分页
        total: 0,
        // 定义节流阀数据
        isloading: false
      };
    },
    onLoad(option) {
      this.queryObj.query = option.query || ''
      this.queryObj.cid = option.cid || ''
      // console.log(option)
      // 获取商品数据
      this.getGoodList()
    },
    
    methods: {
      // 形参参数cb，是用来接收回调函数（关闭下拉刷新效果）
      async getGoodList(cb) {
        // 发起请求时，打开节流阀
        this.isloading = true
       const { data:res } = await uni.$http.get('/api/public/v1/goods/search', this.query)
       // 发起请求后关闭节流阀
       this.isloading =false
       // 只要数据请求完毕，立即调用cb,关闭下拉刷新效果
       cb && cb()
       // console.log(res)
       // 请求失败
       if(res.meta.status !== 200) return uni.$showMsg
       // console.log(res)
       // 请求成功
       // 通过展开运算符进行新旧数组的拼接
       this.goodsList = [...this.goodsList,...res.message.goods]
       this.total = res.message.total
      },
      
      // 跳转到详情页面的方法
      gotoDetail(goods) {
        uni.navigateTo({
          url:'../../subpkg/goods_detail/goods_detail'
        })
      }
    },
    
    // 上拉触底事件
    onReachBottom() {
      // 判断是否还有下一页数据。
      if(this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg()
      // 判断是否在发起其他数据请求，如果是，则不发起额外的请求
      if(this.isloading) return
      // 页码数+1
      this.queryObj.pagenum += 1
      // 并重新获取列表数据
      this.getGoodList()
    },
    
    // 上拉刷新事件
    onPullDownRefresh() {
      // 1. 重置关键数据
        this.queryObj.pagenum = 1
        this.total = 0
        this.isloading = false
        this.goodsList = []
      // 重新发起请求,当请求完毕后，关闭下拉刷新下拉刷新效果
      this.getGoodList(() => uni.stopPullDownRefresh() )
    }
  }
</script>

<style lang="scss">

</style>
