<template>
  <div class="cartitem clearfix">
    <div class="item-title clearfix">
      <div class="title-select">
        <check-button
          :is-checked="listitem.checked"
          @click.native="checkclick"
        ></check-button>
      </div>
      <img src="~assets/img/tabbar/shop.svg" alt="" />
      <span>{{ listitem.shopname }}</span>
      <img class="arrow" src="~assets/img/tabbar/arrow-right.svg" alt="" />
    </div>
    <div class="shopinfo clearfix">
      <div class="shopinfo-select">
        <check-button
          :is-checked="listitem.checked"
          @click.native="checkclick"
        ></check-button>
      </div>
      <div class="shopinfo-img"><img :src="listitem.image" alt="" /></div>
      <div class="shopinfo-detail">
        <span class="title">{{ listitem.title }}</span>
        <div class="desc">
          <span>{{ listitem.desc }}</span>
        </div>
        <span class="price">{{ listitem.price }}</span>
        <button>×{{ listitem.count }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton//CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    listitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkclick() {
      this.listitem.checked = !this.listitem.checked;
    },
  },
};
</script>

<style scoped>
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
.cartitem {
  padding: 20px 10px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 5px;
}
.item-title {
  position: relative;
}
.item-title img {
  float: left;
  width: 24px;
  margin-right: 5px;
}
.item-title .arrow {
  float: left;
  width: 12px;
  margin: 6px 0;
}
.item-title span {
  float: left;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 5px;
}
.shopinfo {
  position: relative;
  margin-top: 20px;
}
.shopinfo-img {
  float: left;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 15px;
}
.shopinfo-img img {
  width: 100%;
  border-radius: 10px;
}
.shopinfo-detail {
  position: relative;
  float: left;
  width: calc(100% - 100px - 15px - 30px);
  height: 100px;
}
.shopinfo-detail .title {
  float: left;
  width: 100%;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shopinfo-detail .price {
  position: absolute;
  font-size: 18px;
  color: #fd3f31;
  left: 0;
  bottom: 0;
}
.shopinfo-detail .price::before {
  content: "￥";
  font-size: 10px;
}
button {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: #fff;
  border: 0.5px solid #d8d8d8;
  border-radius: 5px;
}
.shopinfo-detail .desc {
  float: left;
  width: 100%;
  font-size: 12px;
  margin-top: 8px;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc span {
  width: 100%;
  padding: 6px;
  line-height: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
}
.select {
  float: left;
  display: flex;
  height: 24px;
  flex-direction: column;
  justify-content: center;
}
.shopinfo-select {
  float: left;
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: center;
}
.title-select {
  float: left;
  display: flex;
  height: 24px;
  flex-direction: column;
  justify-content: center;
}
</style>