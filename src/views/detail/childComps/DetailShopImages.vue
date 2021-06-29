<template>
  <div>
    <p><span></span>宝贝详情<span></span></p>
    <img
      v-for="(item, index) in shopImages"
      :key="index"
      :src="item"
      @load="imageload"
    />
  </div>
</template>

<script>
export default {
  name: "DetailShopImages",
  props: {
    shopImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      counter: 0,
      imageslength: 0,
    };
  },
  methods: {
    imageload() {
      //使用if判断所有图片都加载完后，只发送一次事件
      // if (++this.counter === this.imageslength) {
      //   this.$emit("detailimageload");
      // }
      this.$emit("detailimageload");
    },
  },
  //watch监听属性改变
  // watch: {
  //   shopImages() {
  //     this.imageslength = this.shopImages.length;
  //   },
  // },
};
</script>

<style scoped>
img {
  width: 100%;
}
p {
  text-align: center;
  margin: 10px 0 20px;
  font-size: 12px;
}
span {
  display: inline-block;
  width: 35px;
  border-top: 0.5px solid #999;
  vertical-align: middle;
  margin: 0 10px;
}
</style>