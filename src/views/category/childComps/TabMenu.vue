<template>
  <div class="tabmenu">
    <ul class="menu-list">
      <li
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in categories"
        :key="index"
        @click="itemClick(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    },
  },
};
</script>

<style scoped>
.menu-list {
  padding: 2px 0;
  /* overflow: hidden; */
}
li {
  text-align: center;
  margin: 10px 0;
  padding: 10px 0;
  line-height: 30px;
  font-size: 14px;
  color: black;
}
.active {
  font-size: 18px;
  font-weight: 700;
  color: #f16924;
}
</style>