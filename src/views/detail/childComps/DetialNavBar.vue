<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backclick">
        <img src="~assets/img/tabbar/left.svg" alt="" />
      </div>
      <div class="title" slot="center">
        <span
          @click="titleclick(index)"
          v-for="(item, index) in title"
          :key="index"
          :class="{ spanactive: currentindex === index }"
          >{{ item }}</span
        >
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetialNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "详情", "评论", "推荐"],
      currentindex: 0,
    };
  },
  methods: {
    titleclick(index) {
      this.currentindex = index;
      this.$emit("titleclick", index);
    },
    backclick() {
      //返回上一页面
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
span {
  flex: 1;
  padding: 5px 0;
  margin: 0 10px;
}
.spanactive {
  color: rgba(241, 134, 62, 0.849);
  border-bottom: 2px solid rgba(241, 134, 62, 0.849);
}
img {
  height: 20px;
  width: 20px;
}
</style>