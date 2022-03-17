<template>
  <div class="icons">
    <swiper ref="mySwiper"  :options="swiperOptions">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props:{
    list:Array
  },
  data(){
    return{
      swiperOptions: {
        autoplay: false
      }
    }
  },
  name: "HomeIcons",
  computed:{
      pages(){
          const pages = [];
          this.list.forEach((item, index)=>{
              const page = Math.floor(index / 8)
              if(!pages[page]){
                  pages[page] = []
              }
              pages[page].push(item)
          })
          return pages;
      }
  }
};
</script>

<style lang="stylus" scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top: 0.1rem; 

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    height: 0;
    width: 25%;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .4rem;
      box-sizing: border-box;
      padding: .1rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 70%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .4rem;
      text-align: center;
      line-height: .4rem;
      color: #333;
      overflow: hidden
      white-space: nowrap;
      text-overflow: ellipsis
    }
  }
}
</style>