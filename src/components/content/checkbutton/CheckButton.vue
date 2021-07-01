<template>
  <div class="check-button" :class="{ checked: isChecked }">
    <img src="~assets/img/tabbar/select.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  padding: 2px;
  margin-right: 10px;
  border-radius: 12px;
  border: 1px solid #d8d8d8;
}
img {
  width: 100%;
}
.checked {
  border-color: #fd3f31;
  background-color: #fd3f31;
}
</style>