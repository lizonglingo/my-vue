<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>账号：{{email}}</p>
    <hr>
    <h2>产品</h2>
    <Productlist/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import Productlist from './components/Productlist.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  computed: mapState({
    email: state => state.userInfo.email
  }),
  components: {Productlist, ShoppingCart}
};
</script>

