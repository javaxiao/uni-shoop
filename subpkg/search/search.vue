<!-- 搜索功能 -->
<template>
  <view class="search_box">
    <uni-search-bar class="uni-mt-10" :radius="100" cancelButton="none" @input="input" :focus="true" />
    <!-- 搜索建议列表盒子 -->
    <view class="sugg_list" v-if="searchList.length !== 0">
      <!-- 每一项的容器-->
      <view class="sugg_item" v-for="(item, i) in searchList" :key="i" @click="gotoDetail(item.goods_id)">
        <!-- 每一项的内容 -->
        <view class="sugg_name">{{item.goods_name}}</view>
        <!-- 每一项右侧的小箭头 -->
        <uni-icons type="arrowright" size="16"></uni-icons>
      </view>
    </view>
    
    <!-- 搜索历史 -->
    <view class="history_box" v-else>
      <!-- 标题区域 -->
      <view class="history_title">
        <!-- 标题内容 -->
        <text>搜索历史</text>
        <!-- 右侧小图标 -->
        <uni-icons type="trash" size="17"  @click="cleanHistory"></uni-icons>
      </view>
      <!-- 搜索记录列表区域-->
      <view class="history_list">
        <uni-tag :text="item2" v-for="(item2, i) in history" :key="i" @click="gotogoodsList(item2)"></uni-tag>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 计时器,用来进行防抖
        timer: null,
        // 用来存储用户输入的值
        kw: '',
        // 用来存放搜索建议列表的数据
        searchList: [],
        // 存放用户的搜索历史
        historyList: ['菜菜','宝宝','菜菜爱宝宝']
      };
    },
    
    onLoad() {
      //获取本地存储的历史记录。
     this.historyList = JSON.parse(uni.getStorageSync('kw') || '[]') 
    },
    methods: {
      // 防抖
      input(e) {
        // 清除计时器
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          this.kw = e
          // console.log(this.kw)
          // 触发延时器时调用方法
          this.getSearchList()
        }, 500)
      },
      // 获取搜索建议
      async getSearchList() {
        // 如果输入框为空则不搜索对应列表数据
        if (this.kw === '') {
          // searchList则为空
          this.searchList = []
          return
        }
        // 根据参数名称查询对应商品数据
        const { data: res } = await uni.$http.get('/api/public/v1/goods/qsearch', { query: this.kw })
        // console.log(res)
        // 获取失败
        if (res.meta.status !== 200) return uni.$showMsg()
        // 获取成功
        this.searchList = res.message
        // 调用方法
        this.saveSearchHistory()
      },
      
      // 跳转到详情页面方法
      gotoDetail(goods_id) {
        uni.navigateTo({
          // 指定详情页面，并传递参数
          url: '../../subpkg/goods_detail/goods_detail?goods_id=' + goods_id
        })
      },
      
      // 添加数组的方法
      saveSearchHistory() {
        this.historyList.push(this.kw)
        // 将historyList数组转换为set对象
        const set = new Set(this.historyList)
        // 先移除，因为如果搜索历史里面和正在输入的内容一致，那么如果不先删除搜索历史中的内容，新添加的历史记录，就会添加到最后，不会添加到最前面
        set.delete(this.kw)
        // 往对象里面追加内容
        set.add(this.kw)
        // 将set对象转换为数组
        this.historyList = Array.from(set)
        // 使用uni.setStorageSync(key, value)提供的方法，将搜索记录存储到本地
        uni.setStorageSync('kw',JSON.stringify(this.historyList)) 
      },
      
      // 清空历史记录和本地存储
      cleanHistory() {
        this.historyList = []
        uni.removeStorageSync('kw','[]')
      },
      
      // 点击推荐列表跳转到对应页面
      gotogoodsList(kw) {
        uni.navigateTo({
          url: '../../subpkg/goods_list/goods_list?query=' + kw
        })
      }
    },
    computed: {
      // 通过reverse翻转数组，是得push添加元素从前面开始添加，有因为数组是引用数据类型，不建议直接使用reverse
      history() {
        return ([...this.historyList].reverse())
      }
    }
  }
</script>

<style lang="stylus">
  // 搜索框的样式
  .search_box {
    // 吸顶样式
    position: sticky;
    top: 0;
    z-index: 999;
  }

  // 美化搜索建议列表
  .sugg_list {
    padding: 0 5px;

    .sugg_item {
      font-size: 12px;
      padding: 13px 0;
      border-bottom: 1px solid #efefef;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .sugg_name {
        // 文字不允许换行（单行文本）
        white-space: nowrap;
        // 溢出部分隐藏
        overflow: hidden;
        // 文本溢出后，使用 ... 代替
        text-overflow: ellipsis;
        margin-right: 3px;
      }
    }
  }
  
  // 搜索历史样式
  .history_box {
    padding: 0 5px;
    
    .history_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      font-size: 13px;
      border-bottom: 1px solid #efefef
    }
    .history_list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 5px;
      
      .uni-tag {
        margin-right: 5px;
      }
    }
  }
</style>
