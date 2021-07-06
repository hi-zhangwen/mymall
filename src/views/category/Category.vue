<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="content" :pull-up-load="true" :bounce="false">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
    </scroll>
    <!-- {{ showSubcategory }} -->
    <!-- <menu-item :subcategories="showSubcategory"> </menu-item> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabMenu from "./childComps/TabMenu.vue";
import MenuItem from "./childComps/MenuItem.vue";
import Scroll from "components/common/scroll/Scroll";

import { getCategory, getSubcategory } from "network/category";
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    MenuItem,
    Scroll,
  },
  data() {
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
    };
  },
  created() {
    //请求分类数据
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      // if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
      // return ["asdasdfasssssssssssssssssss"]
    },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
      });
    },
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.category-nav {
  background-color: #f16924;
  color: #fff;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  top: 44px;
  overflow: hidden;
  background-color: #f1f3f4;
  width: 25%;
}

</style>