<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60e;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="bannerImgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>  

<script>
import CommonGallary from "./../../../common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  props:{
    sightName:String,
    bannerImg:String,
    bannerImgs:Array
  },
  data() {
    return {
      showGallary: false,
    };
  },
  methods: {
    handleBannerClick() {
      console.log("this", this);
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    },
  },
  components: {
    CommonGallary,
  },
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 57%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      paddinh: 0 0.2rem;
    }

    .banner-number {
      padding: 0 0.4rem;
      height: 0.32rem;
      margin-top: 0.14rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>