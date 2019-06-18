<template>
    <div>
        <div class="row3">
            <span class="row3-text">云购帐号登录</span>
        </div>
        <div class="row4">
            <input class="row4-input" type="text" placeholder="请输入手机号码/邮箱/用户名">
        </div>
        <div class="row5">
            <input class="row5-input" :type="isPassword()" placeholder="请输入密码">
            <van-switch
                class="row5-switch"
                v-model="switchChecked"
                size="1.25rem"
                inactive-color="#c1c2c0"
            />
        </div>
        <div class="row6">
            <van-checkbox class="row6-checkbox" v-model="checkboxChecked" checked-color="#fb7d49"/>
            <span class="row6-text">自动登录</span>
            <span>忘记密码？</span>
        </div>
        <div class="row7">
            <div class="row7-button" @click="onLogin()">
                <span>登录</span>
            </div>
        </div>
        <div class="row8">
            <span class="row8-text" @click="toPhone()">手机验证码登录</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "username",
    data() {
        return {
            switchChecked: false,
            checkboxChecked: true
        };
    },
    methods: {
        onLogin() {},
        isPassword() {
            return this.switchChecked ? "text" : "password";
        },
        toPhone() {
            this.$router.push({path: '/login/phone'});
        }
    }
};
</script>

<style lang="scss">
.row3 {
    display: flex;
    justify-content: center;
    margin-bottom: 0.9375rem;
    .row3-text {
        font-size: 1.125rem;
    }
}
.row4 {
    display: flex;
    height: 3.125rem;
    border: 0.0625rem solid #ccc;
    background-color: #fff;
    align-items: center;
    margin-bottom: -0.0625rem;
    .row4-input {
        width: 100%;
        height: 1.25rem;
        border: none;
    }
}
.row5 {
    display: flex;
    height: 3.125rem;
    border: 0.0625rem solid #ccc;
    background-color: #fff;
    align-items: center;
    margin-bottom: 1.6875rem;
    .row5-input {
        width: 100%;
        height: 1.25rem;
        border: none;
    }
    .row5-switch {
        margin-right: 0.8125rem;
    }
}
.row6 {
    display: flex;
    margin-bottom: 1.25rem;
    .row6-text {
        margin-right: auto;
    }
}
.row7 {
    display: flex;
    margin-bottom: 1.625rem;
    .row7-button {
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
.row8 {
    display: flex;
    margin-bottom: 1.5625rem;
    .row8-text {
        &:active {
            opacity: 0.4;
        }
        &:hover {
            cursor: pointer;
        }
    }
}
</style>


