<template>
    <div class="list-product-container">
        <div class="list-product-main">
            <div class="list-product-row1">
                <van-image class="list-product-row1-image" :src="image" fit="contain" @click="toDetails" />
            </div>
            <div class="list-product-row2" @click="toDetails">
                <span>{{title}}</span>
            </div>
            <div class="list-product-row3">
                <span class="list-product-row3-text">¥ {{price}}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.list-product-container {
    display: flex;
    flex-direction: column;
    width: 10.625rem;
    height: 17.875rem;
    background-color: #fff;
    border-radius: .625rem;
    .list-product-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .list-product-row1 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 9.375rem;
            height: 10.3125rem;
            .list-product-row1-image {
                width: 5.3125rem;
                height: 4.375rem;
            }
        }
        .list-product-row2 {
            width: 9.375rem;
            height: 5rem;
        }
        .list-product-row3 {
            .list-product-row3-text {
                font-size: 1.125rem;
                color: #ff0000;
            }
        }
    }
}
</style>

<script>
export default {
    name: "product",
    props: {
        title: String,
        price: Number,
        image: String
    },
    methods: {
        toDetails() {
            const title = this.title;
            const price = this.price;
            const image = this.image;
            this.$router.push({path: '/details', query: {title, price, image}});
        }
    }
};
</script>


