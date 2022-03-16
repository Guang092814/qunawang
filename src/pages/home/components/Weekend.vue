<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_710x360_c22d14f0.jpg",
          title: "北京环球度假区",
          desc: "果园环岛/通州区",
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_710x360_64983e73.jpg",
          title: "北京环球度假区",
          desc: "果园环岛/通州区",
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts7/1802/84/bda2869fd1600702.jpg_r_240x160x90_6f8b79f6.jpg",
          title: "北京环球度假区",
          desc: "果园环岛/通州区",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
}

.item-img {
  width: 100%;
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>