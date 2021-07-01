<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5600",
    },
  },
  data() {
    return {
      // isactive: true,
    };
  },
  computed: {
    //判断活跃路由和选择的路由是否一致
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  font-size: 12px;
  text-align: center;
  height: 49px;
  background-color: #fff;
  overflow: hidden;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
}
</style>