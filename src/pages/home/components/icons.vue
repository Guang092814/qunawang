<template>
  <div class="icons">
    <swiper ref="mySwiper" >
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
import png1 from "./../../../assets/style/imgs/1.png";
import png2 from "./../../../assets/style/imgs/2.png";
import png3 from "./../../../assets/style/imgs/3.png";
import png4 from "./../../../assets/style/imgs/4.png";
import png5 from "./../../../assets/style/imgs/5.png";
import png6 from "./../../../assets/style/imgs/6.png";
import png7 from "./../../../assets/style/imgs/7.png";
import png8 from "./../../../assets/style/imgs/8.png";
import png9 from "./../../../assets/style/imgs/9.png";
export default {
  name: "HomeIcons",
  data() {
    return {
    //   png1,
    //   png2,
    //   png3,
    //   png4,
    //   png5,
    //   png6,
    //   png7,
    //   png8,
    //   png9,
      iconList:[{
          id: '0001',
          imgUrl: png1,
          desc: '民宿客栈'
      },
      {
          id: '0002',
          imgUrl: png2,
          desc: '专车自驾'
      },
      {
          id: '0003',
          imgUrl: png3,
          desc: '信用卡'
      },
      {
          id: '0004',
          imgUrl: png4,
          desc: '旅游团购'
      },
      {
          id: '0005',
          imgUrl: png5,
          desc: '特惠酒店'
      },
      {
          id: '0006',
          imgUrl: png6,
          desc: '借钱'
      },
      {
          id: '0007',
          imgUrl: png7,
          desc: '白金卡'
      },
      {
          id: '0008',
          imgUrl: png8,
          desc: '行程设计'
      },
      {
          id: '0009',
          imgUrl: png9,
          desc: '一日游'
      },
      ]
    };
  },
  computed:{
      pages(){
          const pages = [];
          this.iconList.forEach((item, index)=>{
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
      bottom: 22px;
      box-sizing: border-box;
      padding: 5px;

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
      height: 22px;
      text-align: center;
      line-height: 22px;
      color: #333;
      overflow: hidden
      white-space: nowrap;
      text-overflow: ellipsis
    }
  }
}
</style>