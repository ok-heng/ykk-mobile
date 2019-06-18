<template>
    <div class="category-container">
        <div class="category-main">
            <div class="category-row1">
                <div class="category-row1-col1">
                    <router-link :to="{path: '/sort', query: {cosmetic}}">
                        <CategoryItem :title="category[0].title" :image="category[0].image"/>
                    </router-link>
                </div>
                <div class="category-row1-col1">
                    <router-link :to="{path: '/sort', query: {xs}}">
                        <CategoryItem :title="category[1].title" :image="category[1].image"/>
                    </router-link>
                </div>
                <div class="category-row1-col1">
                    <router-link :to="{path: '/sort', query: {yazi}}">
                        <CategoryItem :title="category[2].title" :image="category[2].image"/>
                    </router-link>
                </div>
                <div class="category-row1-col1">
                    <router-link :to="{path: '#'}">
                        <CategoryItem :title="category[3].title" :image="category[3].image"/>
                    </router-link>
                </div>
                <div class="category-row1-col1">
                    <router-link :to="{path: '/sort', query: {huli}}">
                        <CategoryItem :title="category[4].title" :image="category[4].image"/>
                    </router-link>
                </div>
            </div>
            <div class="category-row1">
                <div class="category-row1-col1">
                    <router-link :to="{path: '/sort', query: {huli}}">
                        <CategoryItem :title="category[5].title" :image="category[5].image"/>
                    </router-link>
                </div>
                <div class="category-row1-col1">
                    <router-link :to="{path: '/sort', query: {recommend}}">
                        <CategoryItem :title="category[6].title" :image="category[6].image"/>
                    </router-link>
                </div>
                <div class="category-row1-col1">
                    <router-link :to="{path: '#'}">
                        <CategoryItem :title="category[7].title" :image="category[7].image"/>
                    </router-link>
                </div>
                <div class="category-row1-col1">
                    <router-link :to="{path: '#'}">
                        <CategoryItem :title="category[8].title" :image="category[8].image"/>
                    </router-link>
                </div>
                <div class="category-row1-col1">
                    <router-link :to="{path: '#'}">
                        <CategoryItem :title="category[9].title" :image="category[9].image"/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.category-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .category-main {
        display: flex;
        flex-direction: column;
        .category-row1 {
            display: flex;
            flex: 1;
            margin-top: 0.625rem;
            .category-row1-col1 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
import CategoryItem from "@/components/home/categoryItem";

export default {
    name: "category",
    components: {
        CategoryItem
    },
    data() {
        return {
            category: [
                {
                    title: "彩妆",
                    image: require("@/assets/category1.png")
                },
                {
                    title: "XS",
                    image: require("@/assets/category2.png")
                },
                {
                    title: "雅姿",
                    image: require("@/assets/category3.png")
                },
                {
                    title: "家居科技",
                    image: require("@/assets/category4.png")
                },
                {
                    title: "个人护理",
                    image: require("@/assets/category5.png")
                },
                {
                    title: "家居护理",
                    image: require("@/assets/category6.png")
                },
                {
                    title: "活动专区",
                    image: require("@/assets/category7.png")
                },
                {
                    title: "微购",
                    image: require("@/assets/category8.png")
                },
                {
                    title: "悦享荟礼品",
                    image: require("@/assets/category9.png")
                },
                {
                    title: "海外购",
                    image: require("@/assets/category10.png")
                }
            ]
        };
    },
    computed: {
        ...mapState(['recommend', "cosmetic", "xs", "yazi", "huli"])
    }
};
</script>


