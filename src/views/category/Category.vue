<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Category",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.category-nav {
  background-color: #f16924;
  color: #fff;
}
.wrapper {
  height: 200px;
  overflow: hidden;
  background-color: rgb(37, 69, 128);
  color: #fff;
}
</style>