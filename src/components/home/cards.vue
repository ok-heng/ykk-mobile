<template>
    <div class="cards-container">
        <div class="cards-main">
            <div class="cards-row1" v-for="(items, index) in dataCards" :key="index">
                <div class="cards-row1-col1" v-for="(item, index) in items" :key="index">
                    <Card
                        :title="item.title"
                        :content="item.content"
                        :tab="item.tab"
                        :image="item.image"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.cards-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .cards-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .cards-row1 {
            display: flex;
            flex: 1;
            .cards-row1-col1 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                height: 6.25rem;
            }
        }
    }
}
</style>

<script>
import Card from "@/components/home/card";

export default {
    name: "cards",
    components: {
        Card
    },
    data() {
        return {
            dataCards: [
                [
                    {
                        title: "长客会",
                        content: "定期爆款超级省",
                        tab: "满7减1购买优惠",
                        image: require("@/assets/card1.png")
                    },
                    {
                        title: "半价秒杀",
                        content: "荐者有份",
                        tab: "指定商品 半价优惠",
                        image: require("@/assets/card2.png")
                    }
                ],
                [
                    {
                        title: "微购专区",
                        content: "热卖好物抢先购",
                        tab: "火热商品 活力开购",
                        image: require("@/assets/card4.png")
                    },
                    {
                        title: "荐“新”有礼",
                        content: "不荐不散",
                        image: require("@/assets/card3.png")
                    }
                ]
            ]
        };
    }
};
</script>


