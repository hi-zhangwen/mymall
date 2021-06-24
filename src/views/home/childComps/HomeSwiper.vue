<template>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" @load="imageload" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isload: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageload() {
      //使用if判断，只发送一次事件
      if (!this.isload) {
        this.$emit("swiperimageload");
        this.isload = true;
      }
    },
  },
};
</script>

<style scoped>
</style>
