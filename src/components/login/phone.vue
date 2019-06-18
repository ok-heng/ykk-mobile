<template>
    <div>
        <div class="phone-row3">
            <span class="phone-row3-text">手机验证码登录</span>
        </div>
        <div class="phone-row1">
            <div class="phone-row1-input">
                <div class="phone-row1-input-pick">
                    <span class="phone-row1-input-pick-text">+{{pickedValue}}</span>
                    <i
                        id="phone-row1-input-pick-icon"
                        class="ion-ios-arrow-down"
                        @click="onPopup()"
                    />
                </div>
                <div class="phone-row1-input-divider"/>
                <input class="phone-row1-input-input" type="text" placeholder="请输入手机号">
            </div>
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="countryCode"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                />
            </van-popup>
        </div>
        <div class="phone-row2">
            <div class="phone-row2-input">
                <input
                    class="phone-row2-input-input"
                    type="text"
                    placeholder="请输入短信验证码"
                    v-model="verificationCode"
                >
                <div class="phone-row2-input-button">
                    <span class="phone-row2-input-button-text">发送验证码</span>
                </div>
            </div>
        </div>
        <div class="phone-row6">
            <van-checkbox class="row6-checkbox" v-model="checkboxChecked" checked-color="#fb7d49"/>
            <span class="phone-row6-text">自动登录</span>
            <span>忘记密码？</span>
        </div>
        <div class="phone-row7">
            <div class="phone-row7-button" @click="onLogin()">
                <span>登录</span>
            </div>
        </div>
        <div class="phone-row8">
            <span class="phone-row8-text" @click="toUsername()">帐号密码登录</span>
        </div>
    </div>
</template>

<style lang="scss">
.phone-row3 {
    display: flex;
    justify-content: center;
    margin-bottom: 0.9375rem;
    .phone-row3-text {
        font-size: 1.125rem;
    }
}
.phone-row1 {
    display: flex;
    .phone-row1-input {
        display: flex;
        align-items: center;
        width: 100%;
        height: 3.125rem;
        border: 0.0625rem solid #ccc;
        background-color: #fff;
        .phone-row1-input-pick {
            display: flex;
            align-items: center;
            margin-left: 1.25rem;
            margin-right: 1.5rem;
            .phone-row1-input-pick-text {
                margin-right: .75rem;
            }
            #phone-row1-input-pick-icon {
                font-size: 1rem;
            }
        }
        .phone-row1-input-divider {
            margin-right: 0.4375rem;
            width: 0.0625rem;
            height: 1.625rem;
            background-color: #ccc;
        }
        .phone-row1-input-input {
            width: 12.5rem;
            height: 1.25rem;
            border: none;
        }
    }
}
.phone-row2 {
    display: flex;
    margin-top: -0.0625rem;
    margin-bottom: 1.625rem;
    .phone-row2-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 3.125rem;
        border: 0.0625rem solid #ccc;
        background-color: #fff;
        .phone-row2-input-input {
            margin-left: 0.625rem;
            width: 12.5rem;
            height: 1.25rem;
            border: none;
        }
        .phone-row2-input-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.625rem;
            width: 5.3125rem;
            height: 2.1875rem;
            background-color: #fdf6f3;
            border: 0.0625rem solid #fbaa93;
            .phone-row2-input-button-text {
                color: #fbaa93;
            }
            &:active {
                opacity: 0.4;
            }
        }
    }
}
.phone-row6 {
    display: flex;
    margin-bottom: 1.25rem;
    .phone-row6-text {
        margin-right: auto;
    }
}
.phone-row7 {
    display: flex;
    margin-bottom: 1.625rem;
    .phone-row7-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 3.25rem;
        background-color: #fa7e47;
        &:active {
            opacity: 0.4;
        }
        &:hover {
            cursor: pointer;
        }
    }
}
.phone-row8 {
    display: flex;
    margin-bottom: 1.5625rem;
    .phone-row8-text {
        &:active {
            opacity: 0.4;
        }
        &:hover {
            cursor: pointer;
        }
    }
}
</style>

<script>
export default {
    name: "phone",
    data() {
        return {
            pickedValue: "86",
            showPicker: false,
            countryCode: [
                "中国大陆+86",
                "中国香港+852",
                "中国澳门+853",
                "中国台湾+886",
                "英国+44",
                "美国+1"
            ],
            verificationCode: null,
            checkboxChecked: true
        };
    },
    methods: {
        onConfirm(value) {
            const num = value.replace(/[^0-9]/gi, "");
            this.pickedValue = num;
            this.showPicker = false;
        },
        onPopup() {
            this.showPicker = true;
        },
        toUsername() {
            this.$router.push({ path: "/login/username" });
        }
    }
};
</script>


