<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-other">
      <span v-for="(item, index) in goods.colums" :key="index">{{ item }}</span>
    </div>
    <div class="info-services">
      <span class="services">服务</span>
      <div class="info-services-div">
        <span
          v-for="(item, index) in goods.services"
          :key="index"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
}
.info-title {
  font-size: 16px;
  font-weight: 700;
  margin-top: 8px;
}
.n-price {
  font-size: 22px;
  color: #ff4400;
  margin-right: 10px;
}
.o-price {
  font-size: 12px;
  text-decoration: line-through;
  margin-right: 5px;
}
.discount {
  display: inline-block;
  padding: 1px 6px;
  text-align: center;
  line-height: 18px;
  font-size: 10px;
  color: #fff;
  background-color: #ff4400;
  border-radius: 10px;
  vertical-align: top;
}
.info-other {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}
.info-other span {
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: #999999;
}
.info-services {
  margin-top: 20px;
  font-size: 12px;
}
.info-services-div{
  display: flex;
  flex-wrap: wrap;
}
.services {
  float: left;
  margin-right: 15px;
  color: #999999;
}
.info-services-div span{
  margin: 0 5px 5px;
}
</style>