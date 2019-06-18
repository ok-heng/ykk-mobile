<template>
    <div class="login-container">
        <div class="login-main">
            <div class="row1">
                <div class="row1-col1">
                    <!-- <i id="row1-col1-icon" class="ion-ios-arrow-back" @click="onGoBack()"/> -->
                </div>
                <div class="row1-col2">
                    <!-- <img class="row1-col2-image" :src="imageLogo" alt> -->
                </div>
                <div class="row1-col3">
                    <span class="row1-col3-text">快速注册</span>
                </div>
            </div>
            <div class="row2">
                <i id="row2-icon" class="ion-ios-contact"/>
            </div>
            <router-view/>
            <div class="row9">
                <div class="row9-divider"/>
                <span class="row9-text">其他登录方式</span>
                <div class="row9-divider"/>
            </div>
            <div class="row10">
                <van-image class="row10-image" :src="imageQQ" fit="contain"/>
                <van-image class="row10-image" :src="imageWeibo" fit="contain"/>
            </div>
            <div class="row11">
                <div class="row11-divider"/>
            </div>
            <div class="row12">
                <span>关于我们-帮助-意见</span>
            </div>
            <div class="row13">
                <span>amkiki.com(深ICP备1354670)</span>
            </div>
        </div>
        <div style="height: 3.125rem" />
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            imageLogo: require("@/assets/logo.jpeg"),
            imageQQ: require("@/assets/qq.png"),
            imageWeibo: require("@/assets/weibo.png"),
        };
    },
    created() {
    },
    methods: {
        onGoBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss">
.login-container {
    display: flex;
    flex-direction: column;
    .login-main {
        display: flex;
        flex-direction: column;
        margin: 1.25rem;
        .row1 {
            display: flex;
            flex: 1;
            //flex-direction: row;
            margin-bottom: 1.125rem;
            .row1-col1 {
                display: flex;
                flex: 1;
                align-items: center;
                #row1-col1-icon {
                    font-size: 1.5625rem;
                    color: #9a9a9a;
                }
            }
            .row1-col2 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                .row1-col2-image {
                    width: 4.375rem;
                    height: 1.625rem;
                }
            }
            .row1-col3 {
                display: flex;
                flex: 1;
                justify-content: flex-end;
                align-items: center;
                .row1-col3-text {
                    color: #fb753b;
                }
            }
        }
        .row2 {
            display: flex;
            justify-content: center;
            margin-bottom: -0.5rem;
            #row2-icon {
                font-size: 3.625rem;
            }
        }
        .row9 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.9375rem;
            .row9-text {
                margin-left: 20px;
                margin-right: 20px;
            }
            .row9-divider {
                width: 29%;
                height: 0.0625rem;
                background-color: #ccc;
            }
        }
        .row10 {
            display: flex;
            justify-content: center;
            margin-bottom: 3.625rem;
            .row10-image {
                width: 3.125rem;
                height: 3.125rem;
                border-radius: 1.5625rem;
                margin-left: 2.5rem;
                margin-right: 2.5rem;
            }
        }
        .row11 {
            display: flex;
            margin-bottom: 0.625rem;
            .row11-divider {
                width: 100%;
                border-top: 1px dashed #ccc;
            }
        }
        .row12 {
            display: flex;
            justify-content: center;
            margin-bottom: 0.3125rem;
        }
        .row13 {
            display: flex;
            justify-content: center;
        }
    }
}
</style>

