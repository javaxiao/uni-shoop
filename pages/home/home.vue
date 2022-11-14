<template>
  <view>
    <!-- 搜索栏 -->
    <view class="search_box">
      <my-search @click="gotoSearch"></my-search>
    </view>
    <!-- 渲染轮播图 -->
    <swiper :indicator-dots="true" :autoplay="true" :circular="true" :interval="3000" :duration="1000">
      <!-- 渲染轮播图的每一项 -->
      <swiper-item v-for="(item,i) in swiperList" :key="i">
        <!-- 动态渲染图片 -->
        <navigator class="swiper-item" :url="'/subpkg/commodity_details/commodity_details?goods_id=' + item.goods_id">
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>
    
    <!-- 分类列表 -->
    <view class="nav_list">
      <!-- 列表的每一项 -->
      <view class="nav_item" v-for="(item, i) in navList" :key="i"  @click="navclickHandler(item)"> 
        <image :src="item.image_src" class="nav_img"></image>
      </view>
    </view>
    
    <!-- 楼层列表-->
    <view class="floor_list">
      <!-- 楼层的每一项 -->
      <view class="floor_item" v-for="(item, i) in floorList" :key="i">
        <!-- 标题图片 —— 标题区域 -->
        <image :src="item.floor_title.image_src" class="floor_img"></image>
      <!-- 楼层列表 —— 图片区域 -->
      <view class="floor_img_box">
        <!-- 左侧的大盒子 -->
        <navigator class="left_img_box" :url="item.product_list[0].url">
          <image :src="item.product_list[0].image_src" class="left_img"  :style="{width: item.product_list[0].image_width + 'rpx'}" mode="widthFix"></image>
        </navigator>
        <!-- 右侧的四个小盒子 -->
        <view class="right_img_box">
          <navigator class="right_img_item" v-for="(item2, i2) in item.product_list" :key="i2" v-if="i2 !== 0" :url="item2.url">
            <image :src="item2.image_src" :style="{width: item2.image_width + 'rpx'}" mode="widthFix"></image>
          </navigator>
        </view>
        
      </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 定义轮播图数据数组
        swiperList: [],
        // 定义分类列表的数据
        navList: [],
        // 定义楼层列表的数据
        floorList: []
      };
    },
    
    onLoad() {
      // 调用方法，获取轮播图数据
      this.getswiperList(),
      // 定义分类列表的数据
      this.getnavList(),
      // 定义楼层列表数据
      this.getfloorList()
    },
    methods: {
      // 定义获取轮播图数据的方法
     async getswiperList() {
      const{ data: res } = await uni.$http.get('/api/public/v1/home/swiperdata')
      // console.log(res)
         // 请求失败
         if(res.meta.status !== 200) return uni.$showMsg()
         
         // 请求成功
         this.swiperList = res.message
    },
    
    // 定义获取分类列表的数据
    async getnavList() {
     const{ data: res } = await uni.$http.get('/api/public/v1/home/catitems')
     // console.log(res)
     // 获取失败
     if(res.meta.status !== 200) return uni.$showMsg()
     // 获取成功
     this.navList = res.message
    },
    // 分类列表的点击事件
    navclickHandler(item) {
      // 判断类名，跳转到对应的tabbar页面
      if(item.name === '分类') {
        uni.switchTab({
          url: '/pages/cart/cart'
        })
      }
    },
    
    // 定义获取楼层的数据
    async getfloorList() {
     const{ data: res } = await uni.$http.get('/api/public/v1/home/floordata')
     // 获取失败
     // console.log(res)
     if(res.meta.status !== 200) return uni.$showMsg()
     // 通过双重循环，添加url自定义属性，用来指定点击楼层图片跳转的地址 
     res.message.forEach(function(floor) {
       floor.product_list.forEach(function(item) {
         // 添加自定义的url属性
         item.url = '/subpkg/goods_list/goods_list?' + item.navigator_url.split('?')[1]
       })
     })
     // 获取成功
     this.floorList = res.message
    },
    
    // 定义搜索栏跳转方法
    gotoSearch() {
      uni.navigateTo({
        url: '../../subpkg/search/search'
      })
    }
  }
}
</script>

<style lang="scss">
// 设置轮播图样式
swiper {
  height: 330rpx;
  .swiper-item,
  image {
    width: 100%;
  }
}

// 设置分类列表样式
.nav_list {
  display: flex;
  justify-content: space-around;
  margin: 15rpx 0;
  .nav_img{
    width: 128rpx;
    height: 140rpx;
  }
}

// 设置楼层标题的样式
.floor_img {
  display: flex;
  width: 100%;
  height: 60rpx;
}
// 设置楼层右侧四个小图片的样式
.right_img_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.floor_img_box {
  display: flex;
  padding-left: 10rpx;
}

// 设置搜索栏的样式
.search_box {
  // 粘性定位
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
