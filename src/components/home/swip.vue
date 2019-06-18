<template>
    <div class="swip-container">
        <div class="swip-main">
            <div class="swip-row1">
                <van-swipe :autoplay="3000">
                    <van-swipe-item>
                        <router-link :to="{path: '#'}">
                            <van-image
                                class="swip-row1-image"
                                :src="images[0].image"
                                fit="contain"
                            />
                        </router-link>
                    </van-swipe-item>
                    <van-swipe-item>
                        <router-link :to="{path: '#'}">
                            <van-image
                                class="swip-row1-image"
                                :src="images[1].image"
                                fit="contain"
                            />
                        </router-link>
                    </van-swipe-item>
                    <van-swipe-item>
                        <router-link :to="{path: '#'}">
                            <van-image
                                class="swip-row1-image"
                                :src="images[2].image"
                                fit="contain"
                            />
                        </router-link>
                    </van-swipe-item>
                    <van-swipe-item>
                        <router-link :to="{path: '#'}">
                            <van-image
                                class="swip-row1-image"
                                :src="images[3].image"
                                fit="contain"
                            />
                        </router-link>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.swip-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .swip-main {
        display: flex;
        flex-direction: column;
        .swip-row1 {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 10.125rem;
            a {
                &:active {
                    opacity: 1;
                }
            }
            .swip-row1-image {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>

<script>
export default {
    name: "swip",
    data() {
        return {
            images: [
                { image: require("@/assets/swip1.jpg") },
                { image: require("@/assets/swip2.jpg") },
                { image: require("@/assets/swip3.jpg") },
                { image: require("@/assets/swip2.jpg") }
            ]
        };
    }
};
</script>



