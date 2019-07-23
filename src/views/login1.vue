<template>
    <div class="login">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="登录" name="first">
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>

                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>

            <el-tab-pane label="注册" name="second">
                <Register />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Register from "@/views/register";
import axios from "../axios.js";

export default {
    name: "login1",
    components: {
        Register
    },

    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }

                callback();
            }
        };

        return {
            activeName: "first",

            ruleForm: {
                name: "",

                pass: "",

                checkPass: ""
            },

            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入您的名称",
                        trigger: "blur"
                    },

                    {
                        min: 2,
                        max: 5,
                        message: "长度在 2 到 5 个字符",
                        trigger: "blur"
                    }
                ],

                pass: [
                    { required: true, validator: validatePass, trigger: "blur" }
                ]
            }
        };
    },

    methods: {
        //选项卡切换

        handleClick(tab, event) {},

        //重置表单

        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        //提交表单

        submitForm(formName) {
             let reg = this.ruleForm.name == "abc" && this.ruleForm.pass == "123";
             let beforePath = this.$route.query.redirect;
            if (reg) {
                axios.getUser().then(data => {
                    if (data.data.info === false) {
                        this.$message({
                            type: "info",

                            message: "账号不存在"
                        });
                        return;
                    }
                    if (data.data.success) {
                        this.$message({
                            type: "success",

                            message: "登录成功"
                        });
                    }
                    let token = data.data.token;
                    let username = data.data.username;

                    this.$store.dispatch("UserLogin", token);
                    this.$store.dispatch("UserName", username);
                    this.$router.push({ path: beforePath });
                });
            } else {
                console.log("error submit!!");

                return false;
            }
        }
    }
};
</script>

<style lang="scss">
.login {
    width: 400px;

    margin: 0 auto;
}

.el-tabsitem {
    text-align: center;

    width: 60px;
}
</style>