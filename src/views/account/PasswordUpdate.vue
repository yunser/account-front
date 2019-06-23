<template>
    <my-page title="修改密码" class="page page-home">
        <div class="login-box">
            <div>
                <ui-text-field v-model="passwordOld" label="旧密码" type="password" />
            </div>
            <!-- <div>
                <ui-text-field v-model="email" label="邮箱" labelFloat disabled/>
            </div> -->
            <div>
                <ui-text-field v-model="passwordNew" label="新密码" type="password" />
            </div>
            <div>
                <ui-text-field v-model="passwordConfirm" label="确认密码" type="password" />
            </div>
            <ui-raised-button class="login-btn" label="修改密码" primary @click="find"/>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                passwordOld: '',
                passwordNew: '',
                passwordConfirm: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.email = this.$route.query.email
            },
            find() {
                if (!this.passwordOld) {
                    this.$message({
                        type: 'danger',
                        text: '请输入旧密码'
                    })
                    return
                }
                // if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.email)) {
                //     alert('邮箱输入不正确')
                //     return
                // }
                if (!this.passwordNew) {
                    this.$message({
                        type: 'danger',
                        text: '请输入新密码'
                    })
                    return
                }
                if (!this.passwordConfirm) {
                    this.$message({
                        type: 'danger',
                        text: '请输入确认密码'
                    })
                    return
                }
                // TODO
                if (this.passwordConfirm !== this.passwordNew) {
                    this.$message({
                        type: 'danger',
                        text: '确认密码和新密码输入不一致'
                    })
                    return
                }
                let code = this.$route.query.code
                this.$http.post(`/password/update`, {
                    passwordOld: this.passwordOld,
                    passwordNew: this.passwordNew,
                })
                    .then(response => {
                        alert('修改密码成功')
                        this.$router.push('/me')
                    },
                    response => {
                        console.log(response)
                        alert(response.msg)
                    })
            }
        }
    }
</script>

<style scoped>
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
    @media screen and (max-width: 600px) {
        .login-box {
            box-shadow: none;
        }
    }
</style>
