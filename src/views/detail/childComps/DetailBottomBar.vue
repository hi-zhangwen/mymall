<template>
  <div class="bottombar">
    <div class="bottombar-left">
      <div>
        <img src="~assets/img/tabbar/shop.svg" alt="" />
        <span>店铺</span>
      </div>
      <div>
        <img src="~assets/img/tabbar/service.svg" alt="" />
        <span>客服</span>
      </div>
      <div>
        <img src="~assets/img/tabbar/favorite.svg" alt="" />
        <span>收藏</span>
      </div>
    </div>
    <div class="bottombar-right">
      <button class="button-right" @click="addToCart">加入购物车</button>
      <button class="button-left">立即购买</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addcart")
    },
  },
};
</script>

<style scoped>
.bottombar {
  position: fixed;
  height: 49px;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 0.5px solid #d8d8d8;
}
.bottombar-left {
  width: 40%;
  float: left;
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
}
.bottombar-left div {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 10px;
}
.bottombar-left div img {
  width: 22px;
  margin-bottom: 2px;
}
.bottombar-right {
  width: 60%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
}
button {
  width: 48%;
  font-size: 14px;
  padding: 10px;
  border: none;
  color: #fff;
  outline: none;
}
.button-right {
  background-image: linear-gradient(to right, #ff9000 0, #ff9500 100%);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.button-left {
  background-color: #ff4400;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>