<template>
  <div id="detail">
    <detial-nav-bar
      @titleclick="navbarclick"
      class="detail-nav-bar"
      ref="nav"
    ></detial-nav-bar>
    <scroll
      @scroll="scrollcontent"
      class="content"
      ref="scroll"
      :probe-type="2"
      :pull-up-load="true"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-shop-images
        ref="shopimages"
        :shop-images="shopImages"
        @detailimageload="detailimageload"
      ></detail-shop-images>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info
        ref="commentinfo"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <p><span></span>看了又看<span></span></p>
      <goods-list ref="goodslist" :goods="recommends"></goods-list>
    </scroll>
    <back-top v-show="active" @click.native="btnclick"></back-top>
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
import DetialNavBar from "./childComps/DetialNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailShopImages from "./childComps/DetailShopImages.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import { debounce } from "common/utils";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetialNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailShopImages,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    BackTop,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      shopImages: [],
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      itemImgListener: null,
      contentTopYs: [],
      getThemeTopY: null,
      active: false,
    };
  },
  created() {
    //保存传入的商品id
    this.iid = this.$route.params.id;
    //发送网络请求，请求商品的详细数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      //获取详情页轮播图图片数据
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店家信息
      this.shop = new Shop(data.shopInfo);
      //获取商品详情图片信息
      this.shopImages = data.detailInfo.detailImage[0].list;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //判断是否有评论信息并赋值
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate;
      }
    });
    //请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
    //给getThemeTopY赋值并进行防抖
    this.getThemeTopY = debounce(() => {
      //获取并赋值高度
      this.contentTopYs = [];
      this.contentTopYs.push(0);
      this.contentTopYs.push(this.$refs.shopimages.$el.offsetTop);
      this.contentTopYs.push(this.$refs.commentinfo.$el.offsetTop);
      this.contentTopYs.push(this.$refs.goodslist.$el.offsetTop);
    }, 500);
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
    detailimageload() {
      this.$refs.scroll.refresh();
      //调用新生成的防抖函数
      this.getThemeTopY();
    },
    navbarclick(index) {
      this.$refs.scroll.scrollTo(0, -this.contentTopYs[index] + 50, 0);
    },
    scrollcontent(position) {
      const positonY = -position.y;
      this.active = positonY > 1000;
      //根据滚动区域显示对于导航栏标题
      if (positonY >= this.contentTopYs[3] - 50) {
        this.$refs.nav.currentindex = 3;
      } else if (positonY >= this.contentTopYs[2] - 50) {
        this.$refs.nav.currentindex = 2;
      } else if (positonY >= this.contentTopYs[1] - 50) {
        this.$refs.nav.currentindex = 1;
      } else {
        this.$refs.nav.currentindex = 0;
      }
    },
    btnclick() {
      this.$refs.scroll.scrollTo(0, 0, 0);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #f1f3f4;
  z-index: 9;
}
.detail-nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 99;
}
.content {
  position: absolute;
  overflow: hidden;
  background-color: #f1f3f4;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
p {
  margin: 20px 0;
  text-align: center;
  color: #ff4400;
}
span {
  display: inline-block;
  width: 30px;
  border-top: 0.5px solid #ff4400;
  vertical-align: middle;
  margin: 0 10px;
}
</style>