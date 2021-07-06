<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的主页</div>
    </nav-bar>
    <div class="user-info">
      <img src="~assets/img/profile/user-img.jpeg" alt="" />
      <span>登录/注册</span>
      <div class="user-bot">
        <div class="bot">
          <img src="~assets/img/profile/收藏.svg" alt="" />
          <span>收藏</span>
        </div>
        <div class="bot">
          <img src="~assets/img/profile/square_check.svg" alt="" />
          <span>订阅店铺</span>
        </div>
        <div class="bot">
          <img src="~assets/img/profile/播放记录.svg" alt="" />
          <span>足迹</span>
        </div>
        <div class="bot">
          <img src="~assets/img/profile/卡包.svg" alt="" />
          <span>红包/卡卷</span>
        </div>
      </div>
    </div>
    <div class="order clearfix">
      <div class="title clearfix">
        <span>我的订单</span>
        <span>全部</span>
      </div>
      <div class="user-bot">
        <div class="bot">
          <img src="~assets/img/profile/pay.svg" alt="" />
          <span>待付款</span>
        </div>
        <div class="bot">
          <img src="~assets/img/profile/send.svg" alt="" />
          <span>待发货</span>
        </div>
        <div class="bot">
          <img src="~assets/img/profile/deliver.svg" alt="" />
          <span>待收货</span>
        </div>
        <div class="bot">
          <img src="~assets/img/profile/comment.svg" alt="" />
          <span>待评价</span>
        </div>
        <div class="bot">
          <img src="~assets/img/profile/refund.svg" alt="" />
          <span>退款/售后</span>
        </div>
      </div>
    </div>
    <div class="other order">
      <ul>
        <li>我的消息</li>
        <li>积分商城</li>
        <li>会员卡</li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Profile",
  components: {
    NavBar,
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
.profile {
  height: 100vh;
  background-color: #f1f3f4;
}
.profile-nav {
  background-color: #f16924;
  color: #fff;
}
.user-info {
  padding: 10px;
}
.user-info img {
  width: 80px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.user-bot {
  display: flex;
  margin-top: 15px;
  justify-content: space-around;
}
.user-bot img {
  width: 30px;
  margin: 0;
}
.bot {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bot span {
  font-size: 12px;
  margin-top: 5px;
  color: black;
}
.order {
  margin: 5px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
}
.title span:first-child {
  float: left;
  color: black;
}
.title span:last-child {
  float: right;
  line-height: 18px;
  font-size: 12px;
  margin-right: 2px;
}
.title span:last-child::after {
  content: ">";
  margin-left: 2px;
}
.other{
  margin-top: 10px;
  height: 300px;
}
.other li {
  list-style: none;
  line-height: 30px;
  padding: 5px;
  border-bottom: 0.5px solid #d8d8d8;

}
</style>