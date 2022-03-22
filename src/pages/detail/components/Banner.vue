<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://imgs.qunarzz.com/p/tts5/2103/49/74eb0549a9b69702.jpg_750x440_755f1e8e.jpg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-title">出发地:北京</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60e;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>  

<script>
import CommonGallary from "./../../../common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "https://imgs.qunarzz.com/p/tts5/2103/49/74eb0549a9b69702.jpg_750x440_755f1e8e.jpg",
        "https://imgs.qunarzz.com/p/tts4/2103/28/32df61adaecff102.jpg_750x440_b215891c.jpg",
      ],
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