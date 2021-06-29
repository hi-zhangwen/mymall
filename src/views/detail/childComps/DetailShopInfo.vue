<template>
  <div class="shopinfo clearfix">
    <div class="shoptop clearfix">
      <div class="shoptop-left">
        <img :src="shop.logo" alt="" />
        <span>{{ shop.name }}</span>
      </div>
      <div class="shoptop-right">
        <p v-for="(item, index) in shop.score" :key="index">
          {{ item.name }}
          <span>{{ item.score }}</span>
          <span class="better" :class="{ isbetter: item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </p>
      </div>
    </div>
    <div class="shopbot">
      <div class="shopbot-info">
        <p>{{ shop.sells }}</p>
        <p>总销量</p>
      </div>
      <div class="shopbot-info">
        <p>{{ shop.goodsCount }}</p>
        <p>全部宝贝</p>
      </div>
      <div class="shopbot-info">
        <p>{{ shop.fans }}</p>
        <p>粉丝数</p>
      </div>
    </div>
    <div class="enter">
      <button>进店逛逛</button><button>全部宝贝</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
/* 清除浮动 */
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
/* 设置样式 */
.shopinfo {
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
}
.shoptop-left {
  float: left;
  width: 200px;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 18px;
}
.shoptop-left img {
  margin-right: 10px;
  width: 44px;
  border-radius: 22px;
  border: 1px solid #999;
  vertical-align: middle;
}
.shoptop-right {
  float: right;
  margin: 5px 5px 0 0;
  font-size: 10px;
}
.shoptop-right p {
  margin-bottom: 4px;
}
.better {
  float: right;
  margin-left: 10px;
  color: #3f7fce;
}
.isbetter {
  color: #ff4400;
}
.shopbot {
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;
  text-align: center;
  font-weight: 700;
}
.shopbot-info p:nth-child(2) {
  margin-top: 5px;
  font-size: 12px;
}
.enter{
  width: 100%;
  text-align: center;
}
button{
  margin: 20px 10px auto;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #ff4400;;
  color: #ff4400;
  border-radius: 14px;
  font-size: 12px;
  outline: none;
  margin-bottom: 10px;
}
</style>