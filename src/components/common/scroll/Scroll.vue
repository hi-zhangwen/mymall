<template>
  <!-- ref如果是绑定在组件，通过this.$refs.refname获取到的是一个组件对象 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import observeDOM from "@better-scroll/observe-dom";
BetterScroll.use(Pullup);
BetterScroll.use(observeDOM);
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bs: null,
    };
  },
  mounted() {
    this.bs = new BetterScroll(this.$refs.wrapper, {
      //实时监听滚动事件
      //0代表任何时候不派发scroll事件,1代表仅当手指按在滚动区域上，每隔momentumLimitTime毫秒派发，2代表仅当手指按在滚动区域上一直排放scroll事件
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      //使用插件observeDOM解决商品内容无法拖拽的问题
      // observeDOM: true,
      click: true,
    });
    //监听滚动的位置
    this.bs.on("scroll", (position) => {
      //向父组件发送自定义事件scroll和参数position
      this.$emit("scroll", position);
    });
    this.bs.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time) {
      //先判断bs里面是否有值再进行下一步
      this.bs && this.bs.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bs && this.bs.finishPullUp();
    },
    refresh() {
      this.bs && this.bs.refresh();
    },
  },
};
</script>

<style scoped>
</style>