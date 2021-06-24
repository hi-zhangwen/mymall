<template>
  <div class="backtop" ></div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.backtop {
  position: absolute;
  bottom: 100px;
  right: 10px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: url("~assets/img/tabbar/backtop.svg") no-repeat center #fff;
  background-size: 25px, 25px;
  box-shadow: 8px 8px 8px -4px rgb(0, 0, 0, 0.3);
}
</style>