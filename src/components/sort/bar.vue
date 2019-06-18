<template>
    <div class="bar-container">
        <div class="bar-main">
            <div class="bar-row1">
                <div class="bar-row1-col1">
                    <div class="bar-row1-col1-col1">
                        <span class="bar-row1-col1-col1-text">默认排序</span>
                    </div>
                </div>
                <div class="bar-row1-col2">
                    <span class="bar-row1-col2-text">价格</span>
                    <div class="bar-row1-col2-col2">
                        <i id="bar-row1-col2-col2-icon" class="ion-ios-arrow-up"/>
                        <i id="bar-row1-col2-col2-icon" class="ion-ios-arrow-down"/>
                    </div>
                </div>
                <div class="bar-row1-col3">
                    <span class="bar-row1-col3-text">名称</span>
                    <div class="bar-row1-col3-col2">
                        <i id="bar-row1-col3-col2-icon" class="ion-ios-arrow-up"/>
                        <i id="bar-row1-col3-col2-icon" class="ion-ios-arrow-down"/>
                    </div>
                </div>
                <div class="bar-row1-col4">
                    <span class="bar-row1-col4-text">筛选</span>
                    <i id="bar-row1-col4-icon" class="ion-ios-funnel"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.bar-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .bar-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .bar-row1 {
            display: flex;
            flex: 1;
            .bar-row1-col1 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                height: 2.5rem;
                .bar-row1-col1-col1 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 2.5rem;
                    border-bottom: .09375rem solid #0e0e68;
                    .bar-row1-col1-col1-text {
                        color: #0e0e68;
                    }
                }
            }
            .bar-row1-col2 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                height: 2.5rem;
                .bar-row1-col2-text {
                    margin-right: 0.3125rem;
                }
                .bar-row1-col2-col2 {
                    display: flex;
                    flex-direction: column;
                    #bar-row1-col2-col2-icon {
                        font-size: 0.5rem;
                    }
                }
            }
            .bar-row1-col3 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                height: 2.5rem;
                .bar-row1-col3-text {
                    margin-right: 0.3125rem;
                }
                .bar-row1-col3-col2 {
                    display: flex;
                    flex-direction: column;
                    #bar-row1-col3-col2-icon {
                        font-size: 0.5rem;
                    }
                }
            }
            .bar-row1-col4 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                height: 2.5rem;
                .bar-row1-col4-text {
                    margin-right: 0.3125rem;
                }
                #bar-row1-col4-icon {
                    font-size: 1.25rem;
                }
            }
        }
    }
}
</style>

<script>
export default {
    name: "bar"
};
</script>
