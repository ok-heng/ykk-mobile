<template>
    <div class="tabs-container">
        <div class="tabs-main">
            <div class="tabs-row1">
                <van-tabs sticky swipeable>
                    <van-tab title="推荐">
                        <div class="tabs-row1-row1">
                            <div class="tabs-row1-row1-row1">
                                <van-image class="tabs-row1-row1-row1-image" :src="bannerRecommend" fit="fit"/>
                            </div>
                            <div class="tabs-row1-row1-row2">
                                <div
                                    class="tabs-row1-row1-row2-col1"
                                    v-for="(item, index) in recommend"
                                    :key="index"
                                >
                                    <Product
                                        :title="item.title"
                                        :price="item.price"
                                        :image="item.image"
                                    />
                                </div>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="彩妆">
                        <div class="tabs-row1-row1">
                            <div class="tabs-row1-row1-row1">
                                <van-image class="tabs-row1-row1-row1-image" :src="bannerCosmetic" fit="fit"/>
                            </div>
                            <div class="tabs-row1-row1-row2">
                                <div
                                    class="tabs-row1-row1-row2-col1"
                                    v-for="(item, index) in cosmetic"
                                    :key="index"
                                >
                                    <Product
                                        :title="item.title"
                                        :price="item.price"
                                        :image="item.image"
                                    />
                                </div>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="XS">
                        <div class="tabs-row1-row1">
                            <div class="tabs-row1-row1-row1">
                                <van-image class="tabs-row1-row1-row1-image" :src="bannerXS" fit="fit"/>
                            </div>
                            <div class="tabs-row1-row1-row2">
                                <div
                                    class="tabs-row1-row1-row2-col1"
                                    v-for="(item, index) in xs"
                                    :key="index"
                                >
                                    <Product
                                        :title="item.title"
                                        :price="item.price"
                                        :image="item.image"
                                    />
                                </div>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="雅姿">
                        <div class="tabs-row1-row1">
                            <div class="tabs-row1-row1-row1">
                                <van-image class="tabs-row1-row1-row1-image" :src="bannerYazi" fit="fit"/>
                            </div>
                            <div class="tabs-row1-row1-row2">
                                <div
                                    class="tabs-row1-row1-row2-col1"
                                    v-for="(item, index) in yazi"
                                    :key="index"
                                >
                                    <Product
                                        :title="item.title"
                                        :price="item.price"
                                        :image="item.image"
                                    />
                                </div>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="个人护理">
                        <div class="tabs-row1-row1">
                            <div class="tabs-row1-row1-row1">
                                <van-image class="tabs-row1-row1-row1-image" :src="bannerHuli" fit="fit"/>
                            </div>
                            <div class="tabs-row1-row1-row2">
                                <div
                                    class="tabs-row1-row1-row2-col1"
                                    v-for="(item, index) in huli"
                                    :key="index"
                                >
                                    <Product
                                        :title="item.title"
                                        :price="item.price"
                                        :image="item.image"
                                    />
                                </div>
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tabs-container {
    display: flex;
    flex-direction: column;
    .tabs-main {
        display: flex;
        flex-direction: column;
        .tabs-row1 {
            display: flex;
            flex-direction: column;
            .tabs-row1-row1 {
                display: flex;
                flex-direction: column;
                .tabs-row1-row1-row1 {
                    display: flex;
                    justify-content: center;
                    margin-top: .1875rem;
                    margin-bottom: .3125rem;
                    .tabs-row1-row1-row1-image {
                        width: 21.785rem;
                        height: 10.75rem;
                    }
                }
                .tabs-row1-row1-row2 {
                    display: flex;
                    flex: 1;
                    flex-wrap: wrap;
                    margin: 0rem .625rem;
                    .tabs-row1-row1-row2-col1 {
                        display: flex;
                        flex: 1;
                        justify-content: center;
                        margin-bottom: .3125rem;
                    }
                }
            }
        }
    }
}
</style>

<script>
import Product from "@/components/home/product";

export default {
    name: "tabs",
    components: {
        Product
    },
    data() {
        return {
            bannerRecommend: require("@/assets/swip1.jpg"),
            recommend: [
                {
                    title: "雅姿恒时紧致面霜sp+",
                    price: 650,
                    image: require("@/assets/yazi/yazi1.png")
                },
                {
                    title: "雅姿金瘁焕能乳霜pa++",
                    price: 599,
                    image: require("@/assets/yazi/yazi2.png")
                },
                {
                    title: "一吻巴黎唇彩(3种颜色可选)",
                    price: 139,
                    image: require("@/assets/cosmetic/cosmetic1.png")
                },
                {
                    title: "XS加燃营养饮料血橙口味",
                    price: 75,
                    image: require("@/assets/xs/xs1.png")
                },
                {
                    title: "XS加燃营养饮料血草莓口味",
                    price: 75,
                    image: require("@/assets/xs/xs2.png")
                },
                {
                    title: "丽齿健儿童牙膏",
                    price: 36,
                    image: require("@/assets/huli/huli1.png")
                }
            ],
            bannerCosmetic: require("@/assets/cosmetic/cosmetic0.jpg"),
            cosmetic: [
                {
                    title: "一吻巴黎唇彩(3种颜色可选)",
                    price: 139,
                    image: require("@/assets/cosmetic/cosmetic1.png")
                },
                {
                    title: "怦怦双色唇颊棒(3种颜色可选)",
                    price: 149,
                    image: require("@/assets/cosmetic/cosmetic2.png")
                },
                {
                    title: "法式清新定妆喷雾(新品上市)",
                    price: 175,
                    image: require("@/assets/cosmetic/cosmetic3.png")
                },
                {
                    title: "法式修颜遮瑕夜(3种颜色可选)",
                    price: 210,
                    image: require("@/assets/cosmetic/cosmetic4.png")
                },
                {
                    title: "活肤肌底夜(新品上市)",
                    price: 119,
                    image: require("@/assets/cosmetic/cosmetic5.png")
                }
            ],
            bannerXS: require("@/assets/xs/xs0.png"),
            xs: [
                {
                    title: "XS加燃营养饮料血橙口味",
                    price: 75,
                    image: require("@/assets/xs/xs1.png")
                },
                {
                    title: "XS加燃营养饮料血草莓口味",
                    price: 75,
                    image: require("@/assets/xs/xs2.png")
                },
                {
                    title: "XS运动乳清蛋白粉(巧克力味)",
                    price: 399,
                    image: require("@/assets/xs/xs3.png")
                },
                {
                    title: "XS运动乳清蛋白棒(巧克力味)",
                    price: 336,
                    image: require("@/assets/xs/xs4.png")
                },
                {
                    title: "XS运动营养饮料(葡萄口味)",
                    price: 89,
                    image: require("@/assets/xs/xs5.png")
                },
                {
                    title: "XS运动营养饮料(芒果口味)",
                    price: 89,
                    image: require("@/assets/xs/xs6.png")
                }
            ],
            bannerYazi: require("@/assets/yazi/yazi0.png"),
            yazi: [
                {
                    title: "雅姿恒时紧致面霜sp+",
                    price: 650,
                    image: require("@/assets/yazi/yazi1.png")
                },
                {
                    title: "雅姿金瘁焕能乳霜pa++",
                    price: 599,
                    image: require("@/assets/yazi/yazi2.png")
                },
                {
                    title: "雅姿保湿气垫粉底液",
                    price: 159,
                    image: require("@/assets/yazi/yazi3.png")
                },
                {
                    title: "雅姿臻透焕白(新品上市)",
                    price: 259,
                    image: require("@/assets/yazi/yazi4.png")
                },
                {
                    title: "雅姿臻透焕白眼霜(新品上市)",
                    price: 219,
                    image: require("@/assets/yazi/yazi5.png")
                }
            ],
            bannerHuli: require("@/assets/huli/huli0.png"),
            huli: [
                {
                    title: "丽齿健儿童牙膏",
                    price: 36,
                    image: require("@/assets/huli/huli1.png")
                },
                {
                    title: "丽齿健儿童牙刷",
                    price: 100,
                    image: require("@/assets/huli/huli2.png")
                },
                {
                    title: "丽齿健洗发露",
                    price: 159,
                    image: require("@/assets/huli/huli3.png")
                },
                {
                    title: "丽齿健护发素(新品上市)",
                    price: 149,
                    image: require("@/assets/huli/huli4.png")
                }
            ]
        };
    }
};
</script>


