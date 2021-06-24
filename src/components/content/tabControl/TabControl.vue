<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      @click="btnclick(index,item)"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ spanactive: currentindex === index }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    btnclick(index) {
      this.currentindex = index;
      this.$emit('itemclick',index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  margin-bottom: 8px;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}
span {
  padding: 5px;
}
.spanactive {
  color: rgba(241, 134, 62, 0.849);
}
.spanactive span {
  border-bottom: 2px solid rgba(241, 134, 62, 0.849);
}
</style>