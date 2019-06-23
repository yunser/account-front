<template>
    <my-page title="注册">
        <div class="common-container container">
            <div class="page-simple-box">
                <div>
                    <ui-text-field v-model="email" label="邮箱" />
                </div>
                <div>
                <ui-text-field v-model="nickname" label="昵称" />
                </div>
                <div>
                    <ui-text-field v-model="password" type="password" label="密码" />
                </div>
                <ui-raised-button class="login-btn" label="注册" primary @click="register"/>
                <div class="tip">
                    已有账号，点击<router-link to="/login">登录</router-link>
                </div>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                nickname: '',
                password: ''
            }
        },
        mounted() {

        },
        methods: {
            register() {
                if (!this.email) {
                    this.$message({
                        type: 'danger',
                        text: '请输入邮箱'
                    })
                    return
                }
                if (!this.email.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
                    this.$message({
                        type: 'danger',
                        text: '邮箱输入不正确'
                    })
                    return
                }
                if (!this.nickname) {
                    this.$message({
                        type: 'danger',
                        text: '请输入昵称'
                    })
                    return
                }
                if (!this.password) {
                    this.$message({
                        type: 'danger',
                        text: '请输入密码'
                    })
                    return
                }
                this.$http.post('/register', {
                    email: this.email,
                    name: this.nickname,
                    password: this.password
                }).then(response => {
                        let data = response.data
                        console.log(data)
                        // alert('注册成功，请登录邮箱进行验证')
                        alert('注册成功，请登录')
                        this.$router.push('/login')
                    },
                    response => {
                        this.$message({
                            type: 'danger',
                            text: response.msg
                        })
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding-top: 40px;
        max-width: 400px;
    }
    .login-box {
        margin: 100px auto;
        width: 320px;
        padding: 16px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
        .login-btn {
            width: 100%;
            margin-bottom: 16px;
        }
    }
    .tip {
        margin-top: 16px;
        color: #999;
    }
    @media screen and (max-width: 600px) {
        .login-box {
            box-shadow: none;
        }
    }
</style>
