<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xeb6d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="stylus" scoped>
$bgColor = #00bcd4
.header {
  display: flex;
  line-height: 0.9rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.6rem;
    float: left;
    .back-icon{
      text-align: center
      font-size: 0.4rem
    }
  }

  .header-input {
    flex: 1;
    height: 0.6rem;
    line-height: .6rem;
    margin-top: .1rem;
    margin-left: .2rem;
    padding-left: .2rem
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    width: 1.2rem;
    float: right;
    text-align: center;
    .arrow-icon{
      margin-left: -2px 
      font-size: 0.2rem
    }
  }
}
</style>