<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children:[{
              title:"成人三",
              children:[{
                  title:"成人三-墨家常人能"
              }]
          },
          {
              title:"成人无"
          }]
          
        },
        {
          title: "学生票",
        },
        {
          title: "儿童票",
        },
        {
          title: "特惠票",
        },
      ],
    };
  },
};
</script>D

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>