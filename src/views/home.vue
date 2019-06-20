<template>
    <div class="home-container">
        <Header/>
        <!-- <div style="width: 100%; height: .03125rem; background-color: #ccc" /> -->
        <Swip/>
        <Category/>
        <Banner/>
        <Cards/>
        <Tabs/>
    </div>
</template>

<style lang="scss">
.home-container {
    display: flex;
    flex-direction: column;
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
import Header from "@/components/home/header";
import Swip from "@/components/home/swip";
import Category from "@/components/home/category";
import Banner from "@/components/home/banner";
import Cards from "@/components/home/cards";
import Tabs from "@/components/home/tabs";

export default {
    name: "home",
    components: {
        Header,
        Swip,
        Category,
        Banner,
        Cards,
        Tabs
    }
};
</script>