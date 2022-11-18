<!-- 分类页面 -->
<template>
  <view>
    <my-search @click="gotoSearch"></my-search>
    <!-- 滚动区域视图 -->
    <view class="scroll_view_container">
      <!-- 左侧滚动区域 -->
      <scroll-view scroll-y="true" class="left_scroll_view" :style="{height: wh + 'px'}">
        <!-- 循环遍历一级列表 -->
        <block v-for="(item, i) in cateList" :key="i">
          <view :class="['left_scroll_item', i === active ? 'active' : '']" @click="activeChanged(i)">{{item.cat_name}}
          </view>
        </block>
      </scroll-view>
      <!-- 右侧滚动区域视图 -->
      <scroll-view scroll-y="true" class="right_scroll_view" :style="{height: wh + 'px'}" :scroll-top="scrollTop">
        <!-- 二级列表结构（标题） -->
        <block v-for="(item2, i2) in childrenList" :key="i2">
          <view class="right_scroll_title">/ {{item2.cat_name}} /</view>
          <!-- 三级列表数据结构-->
          <view class="right_scroll_lv3">
            <!-- item项 -->
            <view class="right_scroll_item" v-for="(item3, i3) in item2.children" :key="i3" @click="gotoGoodList(item3)">
              <!-- 图片 -->
              <image :src="item3.cat_icon.replace('dev','web')"></image>
              <!-- 文本 -->
              <text>{{ item3.cat_name }}</text>
            </view>
          </view>
        </block>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        wh: 0,
        // 获取的左侧滑动列表数据
        cateList: [],
        active: 0,
        // 二级标题数据
        childrenList: [],
        // 重置滚动条
        scrollTop: 0
      };
    },
    onLoad() {
      // 获取当前系统的信息
      const sysInfo = uni.getSystemInfoSync()
      // console.log(sysInfo)
      // 为 wh 窗口可用高度动态赋值
      this.wh = sysInfo.windowHeight
      // 调用获取左侧滑动数据的方法
      this.getCateList(),
      // 调用获取左侧滑动列表每一项对应的数据方法（二级分类列表）
      this.getChildrenList()
    },
    methods: {
      // 获取左侧滑动列表的数据方法
      async getCateList() {
        const {
          data: res
        } = await uni.$http.get('/api/public/v1/categories')
        // console.log(res)
        // 读取失败
        if (res.meta.status !== 200) return this.$showMsg()
        // 读取成功,转存数据
        this.cateList = res.message
      },

      // 点击不同的项，动态添加active
      activeChanged(i) {
        this.active = i,
          // 为二级分类列表重新赋值
          this.childrenList = this.cateList[i].children
          // 为右侧滚动条重新赋值
          this.scrollTop = this.scrollTop === 0 ? 1 : 0
      },

      // 获取滑动列表每一项对应的数据
      async getChildrenList() {
        const {
          data: res
        } = await uni.$http.get('/api/public/v1/categories')
        // console.log(res)
        if (res.meta.status !== 200) return uni.$showMsg()
        this.childrenList = res.message[0].children
      },
      
      // 跳转到商品详情页面
      gotoGoodList(item3) {
        uni.navigateTo({
          url: '../../subpkg/goods_list/goods_list?cid=' + item3.cat_id
        })
      },
      
      gotoSearch() {
        // console.log('ok')
        // 点击搜索栏跳转到搜索页面
        uni.navigateTo({
          url: '../../subpkg/search/search'
        })
      }
    }
  }
</script>

<style lang="scss">
  .scroll_view_container {
    display: flex;

    .left_scroll_view {
      width: 120px;

      .left_scroll_item {
        background-color: #F7F7F7;
        line-height: 60px;
        text-align: center;

        &.active {
          position: relative;
          background-color: #fff;

          &:before {
            content: ' ';
            display: block;
            height: 30px;
            width: 3px;
            background-color: #c00000;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }

    // 二级标题样式
    .right_scroll_title {
      font-size: 12px;
      font-weight: bold;
      text-align: center;
      padding: 15px 0;
    }

    // 三级样式父级容器的宽度
    .right_scroll_lv3 {
      display: flex;
      flex-wrap: wrap;
      // 三级样式中每一项的样式
      .right_scroll_item {
        width: 33.33%;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // 图片
        image {
          width: 60px;
          height: 60px;
        }
        // 文本
        text: {
          font-size: 12px;
        }
      }
    }
  }
</style>
