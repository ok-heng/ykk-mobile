<template>
    <div>
        <router-view/>
        <van-tabbar z-index="999" v-model="active" route>
            <van-tabbar-item replace to="/home" class="tabbar">
                <i slot="icon" id="icon" class="ion-ios-home"/>
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/category" class="tabbar">
                <i slot="icon" id="icon" class="ion-ios-list"/>
                分类
            </van-tabbar-item>
            <van-tabbar-item replace to="/login/username" class="tabbar">
                <i slot="icon" id="icon" class="ion-ios-cart"/>
                购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/login/phone" class="tabbar">
                <i slot="icon" id="icon" class="ion-ios-person"/>
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            active: 0
        };
    }
};

//去掉ios平台组件点击出现的灰色背景
document.addEventListener("touchstart", function() {});
</script>

<style lang="scss">
@import "./style/common";
.tabbar {
    font-size: .8125rem;
    #icon {
        font-size: 1.375rem;
    }
}
</style> 