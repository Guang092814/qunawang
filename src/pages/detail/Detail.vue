<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:"Detail",
        components:{
            DetailBanner,
            DetailHeader,
        }
    }
</script>

<style lang="stylus" scoped>
.content{
    height: 50rem;
}
</style>