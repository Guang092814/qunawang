<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import CitySearch from './components/Search.vue'
import CityHeader from './components/Header.vue'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:"City",
        components:{
            CityHeader,
            CitySearch,
        }
    }
</script>

<style lang="stylus" scoped>

</style>