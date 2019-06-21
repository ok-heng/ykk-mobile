<template>
    <div class="navigation-container">
        <div class="navigation-main">
            <div class="navigation-row1">
                <div class="navigation-row1-col1">
                    <i id="navigation-row1-col1-icon" class="ion-ios-arrow-back" @click="onGoBack"/>
                </div>
                <div class="navigation-row1-col2">
                    <div class="navigation-row1-col2-row1">
                        <span class="navigation-row1-col2-row1-text">{{title}}</span>
                    </div>
                    <span style="font-size: 1.25rem">...</span>
                </div>
                <div class="navigation-row1-col3"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.navigation-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3.125rem;
    background-color: #fff;
    .navigation-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .navigation-row1 {
            display: flex;
            flex: 1;
            .navigation-row1-col1 {
                display: flex;
                flex: 1;
                align-items: center;
                height: 3.125rem;
                #navigation-row1-col1-icon {
                    margin-left: 0rem;
                    font-size: 1.375rem;
                }
            }
            .navigation-row1-col2 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                height: 3.125rem;
                .navigation-row1-col2-row1 {
                    display: flex;
                    flex-wrap: wrap;
                    width: 6.5625rem;
                    height: 1.4375rem;
                    overflow: hidden;
                    .navigation-row1-col2-row1-text {
                        font-size: 1.25rem;
                    }
                }
            }
            .navigation-row1-col3 {
                display: flex;
                flex: 1;
                align-items: center;
                height: 3.125rem;
            }
        }
    }
}
</style>

<script>
export default {
    name: "navigation",
    props: {
        title: String
    },
    methods: {
        onGoBack() {
            this.$router.go(-1);
        }
    }
};
</script>