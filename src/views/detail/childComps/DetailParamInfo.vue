<template>
  <div class="paraminfo">
    <p>尺码参数/SIZE</p>
    <table
      class="info-size"
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
      celspacing="0"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <p>商品详情</p>
    <table class="goods-infos">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="title">{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  margin: 12px;
}
.info-size,
.goods-infos {
  width: 94%;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  /* border-collapse: collapse; */
}

.info-size td:first-child {
  width: 60px;
  /* border: none; */
}
table tr {
  line-height: 30px;
}
.title {
  width: 80px;
  color: black;
}
</style>