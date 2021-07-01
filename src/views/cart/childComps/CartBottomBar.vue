<template>
  <div class="cartbar">
    <div class="button">
      <check-button
        :is-checked="isSelectAll"
        @click.native="checkclick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="pay">
      <span>结 算</span>
    </div>
    <div class="totalprice">
      <span>合计:</span>
      <span>{{ totalprice }}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton//CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalprice() {
      return this.$store.getters.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          const totalprice =
            Math.floor((preValue + item.price * item.count) * 100) / 100;
          return totalprice;
        }, 0);
    },
    isSelectAll() {
      // return !this.$store.getters.cartList.filter((item) => !item.checked)
      //   .length;
      if (this.$store.getters.cartList.length === 0) {
        return false;
      } else {
        return !this.$store.getters.cartList.find((item) => !item.checked);
      }
    },
  },
  methods: {
    checkclick() {
      // console.log("111");
      //全部选中则取反
      if (this.isSelectAll) {
        this.$store.getters.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.getters.cartList.forEach((item) => (item.checked = true));
      }
      //有没选中的点击则全部选中
    },
  },
};
</script>

<style scoped>
.cartbar {
  position: absolute;
  background-color: #fff;
  height: 65px;
  bottom: 49px;
  left: 0;
  right: 0;
  border-top: 0.5px solid #d8d8d8;
  border-bottom: 0.5px solid #d8d8d8;
  z-index: 99999;
}
.button {
  float: left;
  display: flex;
  height: 100%;
  margin-left: 10px;
  align-items: center;
}
.totalprice {
  float: right;
  line-height: 65px;
  margin-right: 10px;
}
.totalprice span:nth-child(1) {
  font-size: 14px;
  color: black;
}
.totalprice span:nth-child(2) {
  font-size: 24px;
  color: #fd3f31;
}
.totalprice span:nth-child(2)::before {
  content: "￥";
  font-size: 14px;
}
.pay {
  float: right;
  display: flex;
  width: 110px;
  height: 100%;
  margin-right: 10px;
  align-items: center;
}
.pay span {
  width: 100%;
  line-height: 45px;
  text-align: center;
  color: #fff;
  background-color: #fd3f31;
  border-radius: 25px;
}
</style>