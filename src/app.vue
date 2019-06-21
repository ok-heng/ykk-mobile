<template>
    <div>
        <router-view/>
        
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            active: 0,
        };
    }
};

//去掉ios平台组件点击出现的灰色背景
document.addEventListener("touchstart", function() {});
</script>

<style lang="scss">
@import "./style/common";
.tabbar {
    font-size: 0.8125rem;
    #icon {
        font-size: 1.375rem;
    }
}
</style> 