<template>
    <div class="home-container">
        <Header />
        <Swip />
        <Category />
        <Banner />
        <Cards />
        <Tabs />
        <van-tabbar z-index="999" v-model="active" route>
            <van-tabbar-item class="tabbar" replace to="/home">
                <i slot="icon" id="icon" class="ion-ios-home" />
                首页
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/category">
                <i slot="icon" id="icon" class="ion-ios-list" />
                分类
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/cart">
                <i slot="icon" id="icon" class="ion-ios-cart" />
                购物车
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/person">
                <i slot="icon" id="icon" class="ion-ios-person" />
                我的
            </van-tabbar-item>
        </van-tabbar>
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
import axios from "../axios.js";

export default {
    name: "home",
    components: {
        Header,
        Swip,
        Category,
        Banner,
        Cards,
        Tabs
    },
    data() {
        return {
            active: 0,
        };
    },
    created: function() {
    },
    methods: {
        test: function() {
            this.$ajax({
                method: "get",

                url: "/static/db.json",

                dataType: "json",

                crossDomain: true,

                cache: false
            }).then(res => {
                this.a = res.data.posts[0].title;
            }),
                reject => {
                    console.log("请求失败", reject);
                };
        }
    }
};
</script>