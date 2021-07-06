import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations-type"

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //payload添加商品
      let oldcartList = null
      //遍历cartList,如果添加的商品iid在cartList中存在就将此商品赋值给变量oldcartLIst
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldcartList = item
        }
      }
      //判断oldcartList是否为空
      if (oldcartList) {
        // oldcartList.count += 1 
        context.commit(ADD_COUNTER, oldcartList)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve("添加商品成功")
      }
    })
  }
}