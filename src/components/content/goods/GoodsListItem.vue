<template>
  <div class="goodsitem" @click="goodsclick">
    <img :src="showImage" @load="imageLoad" />
    <div class="content">
      <p>{{ goodsItem.title }}</p>
    </div>
    <div class="bot-box">
      <p class="price">{{ goodsItem.price }}</p>
      <div class="collect">
        <img src="~assets/img/tabbar/collect.svg" />
        <span>{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imageLoad() {
      //每有一张图片加载完成便向事件总线bus中发送自定义事件'itemimageload'事件
      this.$bus.$emit("itemimageload");
    },
    goodsclick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goodsitem {
  /* height: 100%; */
  width: 48%;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
}
.goodsitem img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
}
.content {
  padding: 10px 10px;
}
.content p {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.bot-box {
  height: 24px;
  line-height: 24px;
  padding: 0 10px;
}
.price::before {
  content: "￥";
  font-size: 10px;
}
.price {
  float: left;
  font-size: 20px;
  color: #ff4400;
}
.collect {
  float: right;
  font-size: 12px;
}
.collect img {
  width: 12px;
  height: 12px;
  margin-right: 3px;
  vertical-align: middle;
}
.collect span {
  vertical-align: middle;
}
</style>