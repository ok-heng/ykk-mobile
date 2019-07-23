<template>
    <div class="cart-container">
        <div class="cart-a">
            <h3>购物车是空的 !</h3>
        </div>
        <van-tabbar z-index="999" v-model="active" route>
            <van-tabbar-item class="tabbar" replace to="/home">
                <i slot="icon" id="icon" class="ion-ios-home"/>
                首页
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/category">
                <i slot="icon" id="icon" class="ion-ios-list"/>
                分类
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/cart">
                <i slot="icon" id="icon" class="ion-ios-cart"/>
                购物车
            </van-tabbar-item>
            <van-tabbar-item class="tabbar" replace to="/person">
                <i slot="icon" id="icon" class="ion-ios-person"/>
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
    
</template>

<script>
export default {
    name: 'cart',
    data() {
        return {
            active: 2,
        };
    },
}
</script>

<style lang="scss">
.cart-container {
    display: flex;
    flex-direction: column;
    height: 40.625rem;
    background-color: #fff;
    .cart-a {
        display: flex;
        justify-content: center;
        margin-top: 1.875rem;
    }
}
</style>
