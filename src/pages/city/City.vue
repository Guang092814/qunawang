<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CitySearch from './components/Search.vue'
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue' 
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:"City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        }
    }
</script>

<style lang="stylus" scoped>

</style>