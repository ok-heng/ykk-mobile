<template>
    <div class="cards-container">
        <div class="cards-main">
            <div class="cards-row1">
                <div class="cards-row1-col1">
                    <Card
                        :title="cards[0].title"
                        :content="cards[0].content"
                        :tab="cards[0].tab"
                        :image="cards[0].image"
                    />
                </div>
                <div class="cards-row1-col1">
                    <Card
                        :title="cards[1].title"
                        :content="cards[1].content"
                        :tab="cards[1].tab"
                        :image="cards[1].image"
                    />
                </div>
            </div>
            <div class="cards-row1">
                <div class="cards-row1-col1">
                    <Card
                        :title="cards[2].title"
                        :content="cards[2].content"
                        :tab="cards[2].tab"
                        :image="cards[2].image"
                    />
                </div>
                <div class="cards-row1-col1">
                    <Card
                        :title="cards[3].title"
                        :content="cards[3].content"
                        :tab="cards[3].tab"
                        :image="cards[3].image"
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
        margin: 0rem .625rem;
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
            cards: [
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
                },
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
        };
    }
};
</script>


