<template>
  <div class="cartlist">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :listitem="item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: { CartListItem },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
</style>