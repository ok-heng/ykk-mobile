<template>
    <div class="headerC-container">
        <div class="headerC-main">
            <div class="headerC-row1">
                <div class="headerC-row1-col1">
                    <i id="headerC-row1-col1-icon" class="ion-ios-search"/>
                    <input class="headerC-row1-col1-input" type="text" v-model="search" placeholder="请输入商品名称">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.headerC-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .headerC-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .headerC-row1 {
            display: flex;
            align-items: center;
            width: 100%;
            height: 2.8125rem;
            .headerC-row1-col1 {
                display: flex;
                align-items: center;
                width: 100%;
                height: 1.875rem;
                background-color: #f6f4f3;
                #headerC-row1-col1-icon {
                    margin-left: .5rem;
                    font-size: 1.1875rem;
                }
                .headerC-row1-col1-input {
                    margin-left: .5rem;
                    width: 12.5rem;
                    height: 1rem;
                    background-color: #f6f4f3;
                    border: none;
                }
            }
        }
    }
}
</style>

<script>
export default {
    name: "header",
    data() {
        return {};
    }
};
</script>