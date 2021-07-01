<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      class="tabcontrol"
      ref="tabcontrol1"
      @itemclick="typechange"
      :titles="['流行', '新款', '精选']"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="2"
      @scroll="scrollcontent"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <home-swiper
        :banners="banners"
        @swiperimageload="swiperimageload"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        ref="tabcontrol"
        @itemclick="typechange"
        :titles="['流行', '新款', '精选']"
      ></tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <back-top v-show="active" @click.native="btnclick"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    BackTop,
    BackTop,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      //保存商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      type: "pop",
      active: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      itemImgListener: null,
    };
  },
  computed: {
    showgoods() {
      return this.goods[this.type].list;
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //取消全局事件的监听
    this.$bus.$off("itemimageload", this.itemImgListener);
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //添加防抖动
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    //监听item图片加载完成，通过调用scroll组件里面的refresh方法在每张图片加载后都滚动区域进行刷新，解决商品内容无法拖拽的问题
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemimageload", this.itemImgListener);
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //加载完成后调用scroll组件里面的finishPullUp方法
        this.$refs.scroll.finishPullUp();
      });
    },
    typechange(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }
      //让tabcontrol1和tabcontrol的index一致
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol.currentindex = index;
    },
    //点击返回顶部
    btnclick() {
      //通过this.$refs.scroll获取scroll组件然后调用scroll组件里面的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    //设置backtop显示范围
    scrollcontent(position) {
      this.active = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    //上拉加载更多数据
    loadmore() {
      this.getHomeGoods(this.type);
    },
    swiperimageload() {
      //获取tabcontrol的offsetTop
      //所有的组件都有一个属性$el
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  background-color: #f5f5f5;
}
.home-nav {
  background-color: #f16924;
  color: #fff;
}
/*利用定位设置滚动区域*/
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabcontrol {
  position: relative;
  z-index: 9;
}
</style>