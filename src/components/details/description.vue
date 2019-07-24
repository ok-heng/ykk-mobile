<template>
    <div class="description-container">
        <div class="description-main">
            <img class="description-image" :src="image.image1" alt />
            <p>1、紧轮廓：展现肌肤紧实轮廓</p>
            <P>2、赋弹力：展现水嫩弹力肌</P>
            <P>3、淡细纹：淡化丝丝细纹</P>
            <P>产品包装更换期，质量如一，新旧包装随机发货。</P>
            <img class="description-image" :src="image.image2" alt />
            <P>紧致弹润 肌肤好“呼吸” 突破性空气感科技</P>
            <p>·清爽不油腻 ·赋弹性 ·紧致肌肤</p>
            <p>·细致毛孔 ·淡化细纹 ·保湿滋润</p>
        </div>
    </div>
</template>

<style lang="scss">
.description-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .description-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .description-image {
            width: 100%;
            height: 18.75rem;
        }
    }
}
</style>

<script>
export default {
    name: "description",
    data: function() {
        return {
            image: {
                image1: require("@/assets/description/image1.png"),
                image2: require("@/assets/description/image2.png")
            }
        };
    }
};
</script>