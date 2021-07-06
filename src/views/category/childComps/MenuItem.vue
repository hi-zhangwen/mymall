<template>
  <div class="menuitem">
    <scroll class="content" :pull-up-load="true">
      <div class="item-list">
        <div class="info">
          <!-- <a :href="this.itemdetail[0].link">
            <img :src="this.itemdetail[0].image" alt="">
          </a> -->
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "MenuItem",
  components: {
    Scroll,
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  right: 0;
  bottom: 49px;
  top: 44px;
  overflow: hidden;
  padding: 10px;
  background-color: #fff;
  width: 75%;
}
</style>