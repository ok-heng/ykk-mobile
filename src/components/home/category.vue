<template>
    <div class="category-container">
        <div class="category-main">
            <div class="category-row1" v-for="(items, indexRow) in dataCategory" :key="indexRow">
                <div
                    class="category-row1-col1"
                    v-for="(item, indexCol) in items"
                    :key="indexCol"
                    @click="toSort(indexRow, indexCol)"
                >
                    <CategoryItem :title="item.title" :image="item.image"/>
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
            dataCategory: [
                [
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
                    }
                ],
                [
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
            ],
            dataState: null
        };
    },
    computed: {
        ...mapState(["recommend", "cosmetic", "xs", "yazi", "huli"])
    },
    methods: {
        toSort(indexRow, indexCol) {
            if (indexRow == 0) {
                switch (indexCol) {
                    case 0:
                        this.dataState = this.cosmetic;
                        break;
                    case 1:
                        this.dataState = this.xs;
                        break;
                    case 2:
                        this.dataState = this.yazi;
                        break;
                    case 3:
                        this.dataState = this.recommend;
                        break;
                    case 4:
                        this.dataState = this.huli;
                        break;
                }
            } else if (indexRow == 1) {
                switch (indexCol) {
                    case 0:
                        this.dataState = this.huli;
                        break;
                    case 1:
                        this.dataState = this.recommend;
                        break;
                    case 2:
                        this.dataState = this.recommend;
                        break;
                    case 3:
                        this.dataState = this.recommend;
                        break;
                    case 4:
                        this.dataState = this.recommend;
                        break;
                }
            }

            const dataCategory = this.dataState;
            this.$router.push({ path: "/sort", query: { dataCategory } });
        }
    }
};
</script>


