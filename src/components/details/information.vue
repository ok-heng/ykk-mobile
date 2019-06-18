<template>
    <div class="information-container">
        <div class="information-main">
            <div class="information-col1">
                <div class="information-col1-row1">
                    <span class="information-col1-row1-text">{{title}}</span>
                </div>
                <span class="information-col1-text1">¥ {{price}}</span>
                <span class="information-col1-text2">编号：40477</span>
                <span class="information-col1-text3">净含量：50ML</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.information-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .information-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .information-col1 {
            display: flex;
            flex-direction: column;
            .information-col1-row1 {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 1.875rem;
                width: 100%;
                height: 3.125rem;
                overflow: hidden;
                .information-col1-row1-text {
                    font-size: 1.3125rem;
                }
            }
            .information-col1-text1 {
                font-size: 1.375rem;
                color: #ff0000;
                margin-bottom: 1.875rem;
            }
            .information-col1-text2 {
                color: #ccc;
                margin-bottom: .75rem;
            }
            .information-col1-text3 {
                color: #ccc;
            }
        }
    }
}
</style>

<script>
export default {
    name: "information",
    props: {
        title: String,
        price: String
    }
};
</script>