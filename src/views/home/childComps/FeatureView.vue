<template>
  <div class="feature">
    <p>本周流行</p>
    <div class="feature-item">
      <div
        class="feature-item-child"
        v-for="(item, index) in feature"
        :key="index"
      >
        <a :href="item.link" target="_blank">
          <img :src="item.image" />
          <div>{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  data() {
    return {
      feature: [
        {
          link: "https://m.mogu.com/wall/s?q=%E5%A5%B3%E8%A3%85",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_1ldikaae13k9be2kc2860h3l2kc5i_150x150.png_640x640.v1cAC.40.webp",
          title: "女装",
        },
        {
          link: "https://m.mogu.com/wall/s?q=%E4%B8%8A%E8%A1%A3&ptp=32._mf1_1239_4537.0.0.tiGD6H3P&acm=3.mce.1_10_1u0e0.140653.0.qhlZ9sAGerOjK.pos_884-m_700064-sd_119-mf_4537_1211938-idx_2-mfs_10-dm1_5000",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_7llgl01h7l8la47ki60g90ij4ib1i_150x150.png_640x640.v1cAC.40.webp",
          title: "上衣",
        },
        {
          link: "https://m.mogu.com/wall/s?q=%E5%A5%B3%E9%9E%8B",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_33aak1kgeegijhi3g4dl4l1d069h7_150x150.png_640x640.v1cAC.40.webp",
          title: "女鞋",
        },
        {
          link: "https://m.mogu.com/wall/s?q=%E8%A3%A4%E5%AD%90",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_16dal2iaj300ce73ada65g0514jlk_151x150.png_640x640.v1cAC.40.webp",
          title: "裤子",
        },
        {
          link: "https://m.mogu.com/wall/s?q=%E7%BE%8E%E5%A6%86/%E4%B8%AA%E6%8A%A4&ptp=32._mf1_1239_4537.0.0.zuh7HxV4&acm=3.mce.1_10_1u0eg.140653.0.qTQe3sAGfkBqY.pos_873-m_700072-sd_119-mf_4537_1211938-idx_5-mfs_10-dm1_5000",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_2bdj4144677j5hlbdi5d490a2ad5c_150x150.png_640x640.v1cAC.40.webp",
          title: "美妆护肤",
        },
        {
          link: "https://m.mogu.com/wall/s?q=%E8%A3%99%E5%AD%90&ptp=32._mf1_1239_4537.0.0.PknII7fQ&acm=3.mce.1_10_1u0eo.140653.0.qhlZ9sAGgJZr1.pos_888-m_700076-sd_119-mf_4537_1211938-idx_6-mfs_10-dm1_5000",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_5jbk3iggd5cl4ei83i64ai1dk2lg4_151x150.png_640x640.v1cAC.40.webp",
          title: "裙子",
        },
        {
          link: "https://m.mogu.com/wall/s?q=%E5%A5%97%E8%A3%85&ptp=32._mf1_1239_4537.0.0.R5PZeYCe&acm=3.mce.1_10_1u0ey.140653.0.qhlZ9sAGgO3pc.pos_890-m_700081-sd_119-mf_4537_1211938-idx_8-mfs_10-dm1_5000",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_571djje4gf3dj24cj6c24k6gl0kcl_150x150.png_640x640.v1cAC.40.webp",
          title: "套装",
        },
        {
          link: "https://m.mogu.com/wall/s?q=%E7%94%B7%E8%A3%85&ptp=32._mf1_1239_4537.0.0.iWQmoN8h&acm=3.mce.1_10_1u0f6.140653.0.xYIbmsAGhaLNk.pos_877-m_700085-sd_119-mf_4537_1211938-idx_9-mfs_10-dm1_5000",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_5g11kl87401bf1273068k721jhe38_151x150.png_640x640.v1cAC.40.webp",
          title: "男装男鞋",
        },
      ],
    };
  },
};
</script>

<style scoped>
.feature {
  text-align: center;
  background-color: #fff;
  border-top: 1px transparent solid;
}
.feature p {
  margin: 10px 0 15px;
  font-size: 20px;
  font-weight: 700;
}
.feature-item {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
}
.feature-item-child {
  flex: 1;
  margin: 0 10px 10px 10px;
}
.feature-item-child img {
  margin-bottom: 5px;
  width: 60px;
  height: 60px;
}
</style>