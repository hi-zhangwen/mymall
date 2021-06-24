<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img src="~assets/img/tabbar/home.png" slot="item-icon" />
      <img src="~assets/img/tabbar/home-active.svg" slot="item-icon-active" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" >
      <img src="~assets/img/tabbar/modular.png" slot="item-icon" />
      <img
        src="~assets/img/tabbar/modular-active.svg"
        slot="item-icon-active"
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" >
      <img src="~assets/img/tabbar/shop-car.svg" slot="item-icon" />
      <img
        src="~assets/img/tabbar/shop-car-active.svg"
        slot="item-icon-active"
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <img src="~assets/img/tabbar/user.png" slot="item-icon" />
      <img src="~assets/img/tabbar/user-active.svg" slot="item-icon-active" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>