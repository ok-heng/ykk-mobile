<template>
    <div class="list-container">
        <div class="list-main">
            <div class="list-row1">
                <div class="list-row1-col1" v-for="(item, index) in dataList" :key="index">
                    <Product :title="item.title" :price="item.price" :image="item.image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.list-container {
    display: flex;
    flex-direction: column;
    .list-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .list-row1 {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            .list-row1-col1 {
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: center;
                margin-bottom: 0.3125rem;
            }
        }
    }
}
</style>

<script>
import Product from "@/components/sort/product";

export default {
    name: "list",
    components: {
        Product
    },
    props: ['dataList']
};
</script>