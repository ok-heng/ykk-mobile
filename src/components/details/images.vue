<template>
    <div class="images-container">
        <div class="images-main">
            <div class="images-col1">
                <van-image class="images-col1-image" :src="images" fit="contain" />
            </div>
            <div style="width: 100%; height: .0625rem; background-color: #ccc; margin-bottom: 1.5625rem" />
        </div>
    </div>
</template>

<style lang="scss">
.images-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .images-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .images-col1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 23.4375rem;
            .images-col1-image {
                width: 16.25rem;
                height: 9.375rem;
            }
        }
    }
}
</style>

<script>
export default {
    name: "images",
    props: {
        images: String
    }
};
</script>
