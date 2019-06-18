<template>
    <div class="banner-container">
        <div class="banner-main">
            <div class="banner-row1">
                <van-image class="banner-row1-image" :src="banner[0].image" fit="contain"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.banner-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .banner-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .banner-row1 {
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 5.5rem;
            .banner-row1-image {
                width: 100%;
                height: 5.5rem;
            }
        }
    }
}
</style>

<script>
export default {
    name: "banner",
    data() {
        return{
            banner: [
                {
                    image: require("@/assets/imageModule.png")
                }
            ]
        };
    }
};
</script>

