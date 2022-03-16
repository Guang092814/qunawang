<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img
          class="item-img"
          :src="item.imgUrl"
          alt=""
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data(){
      return{
          recommendList:[{
              id: '0001',
              imgUrl:'https://imgs.qunarzz.com/sight/p0/2201/f7/f708779f6b807a41a3.water.jpg_330x267_fbcc068c.jpg',
              title: '北京环球度假区',
              desc: '果园环岛/通州区'
      },
      {
              id: '0002',
              imgUrl:'https://imgs.qunarzz.com/sight/p0/2201/f7/f708779f6b807a41a3.water.jpg_330x267_fbcc068c.jpg',
              title: '北京环球度假区',
              desc: '果园环岛/通州区'
      },
      {
              id: '0003',
              imgUrl:'https://imgs.qunarzz.com/sight/p0/2201/f7/f708779f6b807a41a3.water.jpg_330x267_fbcc068c.jpg',
              title: '北京环球度假区',
              desc: '果园环岛/通州区'
      }
      ]
      }
      
  }
};
</script>

<style lang="stylus" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

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

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.6rem;
      color: #fff;
    }
  }
}
</style>