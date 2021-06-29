<template>
  <div
    class="commentinfo clearfix"
    v-if="Object.keys(commentInfo).length !== 0"
  >
    <div class="info-header clearfix">
      <p class="header-title">宝贝评价</p>
      <span>({{ commentInfo.cRate }})</span>
      <p class="header-more">查看全部</p>
    </div>
    <div class="info-user">
      <img :src="commentInfo.list[0].user.avatar" alt="" />
      <div>
        <span>{{ commentInfo.list[0].user.uname }} </span>
        <span>{{ commentInfo.list[0].created | showDate }}</span>
      </div>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.list[0].content }}</p>
      <span>{{ commentInfo.list[0].style }}</span>
    </div>
    <div class="info-imgs">
      <img
        v-for="(item, index) in commentInfo.list[0].images"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      time: 0,
    };
  },
  created() {
    // this.time = data;
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
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
.commentinfo {
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
}
.info-header {
  width: 100%;
  margin-bottom: 10px;
}
.header-title,
.info-header span {
  float: left;
  font-size: 16px;
  line-height: 20px;
  color: black;
}
.header-more {
  float: right;
  font-size: 12px;
  line-height: 20px;
  color: #ff4400;
}
.info-user {
  margin-bottom: 15px;
}
.info-user img {
  float: left;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  vertical-align: middle;
}
.info-user div {
  display: flex;
  font-size: 12px;
  height: 48px;
  padding: 8px;
  flex-direction: column;
  justify-content: space-between;
}
.info-user div span:first-child {
  color: black;
}
.info-detail p {
  margin-bottom: 10px;
}
.info-detail span {
  font-size: 12px;
}
.info-imgs img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 5px;
}
</style>