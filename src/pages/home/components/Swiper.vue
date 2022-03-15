<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import img1 from "./../../../assets/style/imgs/1.jpg";
import img2 from "./../../../assets/style/imgs/2.jpg";
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        loop:true
      },
      img1,
      img2,
      swiperList: [{
        id: '0001',
        imgUrl: img1
      },{
        id: '0002',
        imgUrl: img2
      }
      ]
    };
  },
};
</script>

<style lang="stylus" scoped>

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26%;
  background: #eee
  .swiper-img {
    width: 100%;
  }
}
</style>