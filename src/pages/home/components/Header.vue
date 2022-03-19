<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "HomeHeader",
  computed:{
    ...mapState(['city'])
  }
};
</script>

<style lang="stylus" scoped>
@import '@/assets/style/varibles.styl';

.header {
  display: flex;
  line-height: 0.9rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.6rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.6rem;
    line-height: 0.6rem;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding:0 .1rem;
    float: right;
    text-align: center;
    color: #fff

    .arrow-icon {
      margin-left: -2px;
      font-size: 0.2rem;
    }
  }
}
</style>