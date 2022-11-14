<template>
  <view class="my_search_container" :style="{'background-color': bgcolor}" @click="searchBoxHandler" >
    <view class="my_serch_box" :style="{'border-radius': radius + 'px'}" >
      <!-- 搜索按钮图片 -->
      <uni-icons type="search" size="17"></uni-icons>
      <!-- 文本框 -->
      <text class="placeholder" >搜索</text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "my-search",
    data() {
      return {
      }
    },
    // 方便用户自定制样式
    props: {
      bgcolor: {
        type: String,
        default: '#c00000'
      },
      // 圆角尺寸
      radius: {
        type: Number,
        default: 18
      }
    },

    // 方法事件
    methods: {
      searchBoxHandler() {
        // console.log('宝宝')
        // 获取cate组件中my-search组件绑定的事件
        this.$emit('click')
      }
      
    }
  }
</script>

<style lang="scss">
  // 美化search组件样式
  .my_search_container {
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background-color: #c00000;
  }

  .my_serch_box {
    height: 36px;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .placeholder {
      font-size: 15px;
      margin-left: 5px;
    }
  }
</style>
