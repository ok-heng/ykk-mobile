<template>
    <div class="buy-container">
        <div class="buy-row1">
            <div class="buy-row1-iconCart">
                <i id="buy-row1-iconCart-icon" class="ion-ios-cart"/>
                <span class="buy-row1-iconCart-text">购物车</span>
            </div>
            <div class="buy-row1-iconCategory">
                <i id="buy-row1-iconCategory-icon" class="ion-ios-list"/>
                <span class="buy-row1-iconCategory-text">分类</span>
            </div>
            <div class="buy-row1-buttonBuy">
                <span class="buy-row1-buttonBuy-text">立即购买</span>
            </div>
            <div class="buy-row1-buttonCart">
                <span class="buy-row1-buttonCart-text">加入购物车</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.buy-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3.125rem;
    background-color: #fff;
    .buy-row1 {
        display: flex;
        align-items: center;
        .buy-row1-iconCart {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0.9375rem;
            margin-right: 1.4375rem;
            #buy-row1-iconCart-icon {
                margin-bottom: 0.375rem;
                font-size: 1.4375rem;
                height: 1.4375rem;
            }
            .buy-row1-iconCart-text {
                font-size: 0.8125rem;
            }
        }
        .buy-row1-iconCategory {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 1.875rem;
            #buy-row1-iconCategory-icon {
                margin-bottom: 0.375rem;
                font-size: 1.4375rem;
                height: 1.4375rem;
            }
            .buy-row1-iconCategory-text {
                font-size: 0.8125rem;
            }
        }
        .buy-row1-buttonBuy {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 7.375rem;
            height: 2.5rem;
            background-color: #fce6ed;
            border-top-left-radius: 0.3125rem;
            border-bottom-left-radius: 0.3125rem;
            .buy-row1-buttonBuy-text {
                font-size: 1.0625rem;
                color: #e61351;
            }
        }
        .buy-row1-buttonCart {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 7.375rem;
            height: 2.5rem;
            background-color: #e81441;
            border-top-right-radius: 0.3125rem;
            border-bottom-right-radius: 0.3125rem;
            .buy-row1-buttonCart-text {
                font-size: 1.0625rem;
                color: #f9dce1;
            }
        }
    }
}
</style>

<script>
export default {
    name: "buy"
};
</script>
