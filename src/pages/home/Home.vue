<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons  from './components/icons.vue'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:"Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons
        }
    }
</script>

<style lang="scss" scoped>

</style>