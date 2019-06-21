<template>
    <div class="category-container">
        <Header/>
        <van-tree-select
            :items="items"
            :main-active-index="mainActiveIndex"
            :active-id="activeId"
            @navclick="onNavClick"
            @itemclick="onItemClick"
        />
        <div style="height: 17.5rem; background-color: #fff"/>
        <van-tabbar z-index="999" v-model="active" route>
            <van-tabbar-item class="tabbar" replace to="/home">
                <i slot="icon" id="icon" class="ion-ios-home"/>
                首页
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/category">
                <i slot="icon" id="icon" class="ion-ios-list"/>
                分类
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/login/username">
                <i slot="icon" id="icon" class="ion-ios-cart"/>
                购物车
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/login/phone">
                <i slot="icon" id="icon" class="ion-ios-person"/>
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style lang="scss">
.category-container {
    display: flex;
    flex-direction: column;
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
import Header from "@/components/category/header";

export default {
    name: "category",
    components: {
        Header
    },
    data() {
        return {
            active: 1,
            items: [
                {
                    text: "产品分类 "
                },
                {
                    text: "彩妆",
                    children: [
                        {
                            id: 1,
                            text: "全部产品"
                        },
                        {
                            id: 2,
                            text: "唇膏系列"
                        },
                        {
                            id: 3,
                            text: "化妆品附件"
                        },
                        {
                            id: 4,
                            text: "城市系列彩妆"
                        },
                        {
                            id: 5,
                            text: "巴黎美妆系列"
                        },
                        {
                            id: 6,
                            text: "面部底妆品系列"
                        }
                    ]
                },
                {
                    text: "雅姿",
                    children: [
                        {
                            id: 1,
                            text: "全部产品"
                        },
                        {
                            id: 2,
                            text: "卓效美肌系列"
                        },
                        {
                            id: 3,
                            text: "恒时紧致系列"
                        },
                        {
                            id: 4,
                            text: "恒时凝颜系列"
                        },
                        {
                            id: 5,
                            text: "臻透焕白系列"
                        },
                        {
                            id: 6,
                            text: "水润保湿系列"
                        },
                        {
                            id: 6,
                            text: "黄金面霜系列"
                        }
                    ]
                },
                {
                    text: "XS",
                    children: [
                        {
                            id: 1,
                            text: "全部产品"
                        },
                        {
                            id: 2,
                            text: "XS饮料系列"
                        },
                        {
                            id: 3,
                            text: "XS运动营养系列"
                        }
                    ]
                },
                {
                    text: "个人护理",
                    children: [
                        {
                            id: 1,
                            text: "全部产品"
                        },
                        {
                            id: 2,
                            text: "身体护理"
                        },
                        {
                            id: 3,
                            text: "秀发护理"
                        },
                        {
                            id: 4,
                            text: "口腔健康"
                        },
                        {
                            id: 5,
                            text: "消毒抗菌"
                        }
                    ]
                },
                {
                    text: "家居护理",
                    children: [
                        {
                            id: 1,
                            text: "全部产品"
                        },
                        {
                            id: 2,
                            text: "餐洁系列"
                        },
                        {
                            id: 3,
                            text: "衣洁系列"
                        },
                        {
                            id: 4,
                            text: "日常清洁产品"
                        },
                        {
                            id: 5,
                            text: "产品附件"
                        }
                    ]
                },
                {
                    text: "辅销产品",
                    children: [
                        {
                            id: 1,
                            text: "全部辅销产品"
                        }
                    ]
                }
            ],
            mainActiveIndex: 0,
            activeId: null,
            dataState: null
        };
    },
    computed: {
        ...mapState(["cosmetic", "xs", "yazi", "huli"])
    },
    methods: {
        onNavClick(index) {
            this.mainActiveIndex = index;
            switch (this.mainActiveIndex) {
                case 1:
                    this.dataState = this.cosmetic;
                    break;
                case 2:
                    this.dataState = this.yazi;
                    break;
                case 3:
                    this.dataState = this.xs;
                    break;
                case 4:
                    this.dataState = this.huli;
                    break;
                case 5:
                    this.dataState = this.huli;
                    break;
                case 6:
                    this.dataState = this.huli;
                    break;
            }
        },
        onItemClick(data) {
            this.activeId = data.id;
            const dataCategory = this.dataState;
            this.$router.push({ path: "/sort", query: { dataCategory } });
        }
    }
};
</script>

