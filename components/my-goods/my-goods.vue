<template>
  <!-- 每一个商品内容的盒子 -->
  <view class="goods_item">
    <!-- 左侧盒子-->
    <view class="goods_item_left">
      <!-- 图片 -->
      <image :src="goods.goods_small_logo || defaultPic" class="goods_pic"></image>
    </view>
    <!-- 右侧内容 -->
    <view class="goods_item_right">
      <!-- 标题 -->
      <view class="goods_item_title">{{goods.goods_name}}</view>
      <!-- 价格 -->
      <view class="goods_item_price">￥{{goods.goods_price | tofixed}}</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
         defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
      };
    },
    props: {
      goods: {
        type: Object,
        default: []
      }
    },
    // 过滤器过滤价格，保留两位小数
    filters: {
      tofixed(pic) {
        // 保留两位小数
        return Number(pic).toFixed(2)
      }
    }
  }
</script>

<style lang="scss">
.goods_item {
  display: flex;
  padding: 10px 5px;
  border-bottom:1px solid #efefef ;
  // 左侧盒子样式
  .goods_item_left {
    margin-right: 5px;
  }
  // 左侧图片样式
  .goods_pic {
    width: 100px;
    height: 100px;
    // display: block;
  }
}
// 右侧盒子内容
.goods_item_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // 标题
  .goods_item_title {
    font-size: 13px;
  }
  // 价格
  .goods_item_price {
    font-size: 16px;
    color: #c00000;
  }
}
</style>