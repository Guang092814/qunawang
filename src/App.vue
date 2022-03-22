<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- <Home></Home> -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Home from './pages/home/Home.vue'
export default {
  name: "App",
  // components:{
  //   Home,
  // }
};
</script>

<style lang="scss" scoped>
</style>