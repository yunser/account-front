<template>
    <my-page title="找回密码">
        <div class="common-container container">
            <div class="page-simple-box">
                <div>
                    <ui-text-field v-model="email" label="邮箱" />
                </div>
                <ui-raised-button class="login-btn" label="找回密码" primary @click="find"/>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                email: '1418503647@qq.com'
            }
        },
        mounted() {
            this.valid()
        },
        methods: {
            find() {
                if (!this.email) {
                    this.$message({
                        type: 'danger',
                        text: '请输入邮箱'
                    })
                    return
                }
                if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.email)) {
                    this.$message({
                        type: 'danger',
                        text: '邮箱输入不正确'
                    })
                    return
                }
                this.$http.get(`/send_reset_code?email=${this.email}`)
                    .then(response => {
                        alert('重置密码链接已经发送至该邮箱')
                        // this.$message({
                        //     type: 'danger',
                        //     text: '重置密码链接已经发送至该邮箱'
                        // })
                        this.email = ''
                    },
                    response => {
                        console.log(response)
                        this.$message({
                            type: 'danger',
                            text: response.msg
                        })
                    })
            }
        }
    }
</script>

<style scoped>
    .container {
        max-width: 320px;
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
    @media screen and (max-width: 600px) {
        .login-box {
            box-shadow: none;
        }
    }
</style>
