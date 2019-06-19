<template>
    <div class="header-container">
        <div class="header-main">
            <div class="header-row1">
                <div class="header-row1-col1">
                    <i id="header-row1-col1-icon" class="ion-ios-search"/>
                    <input
                        class="header-row1-col1-input"
                        type="text"
                        v-model="search"
                        placeholder="请输入商品名称"
                    >
                </div>
                <div class="header-row1-col2" @click="toCategory">
                    <i id="header-row1-col2-icon" class="ion-ios-list"/>
                    <span class="header-row1-col2-text">分类</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.header-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .header-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .header-row1 {
            display: flex;
            align-items: center;
            width: 100%;
            height: 2.8125rem;
            .header-row1-col1 {
                display: flex;
                align-items: center;
                width: 17.875rem;
                height: 1.875rem;
                background-color: #f6f4f3;
                #header-row1-col1-icon {
                    margin-left: 0.5rem;
                    font-size: 1.1875rem;
                }
                .header-row1-col1-input {
                    margin-left: 0.5rem;
                    width: 12.5rem;
                    height: 1rem;
                    background-color: #f6f4f3;
                    border: none;
                }
            }
            .header-row1-col2 {
                display: flex;
                align-items: center;
                margin-left: auto;
                #header-row1-col2-icon {
                    font-size: 1.125rem;
                }
                .header-row1-col2-text {
                    margin-left: 0.3125rem;
                    font-size: 0.9375rem;
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
    },
    methods: {
        toCategory() {
            this.$router.push({path: '/category'})
        }
    }
};
</script>