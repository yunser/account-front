<template>
    <my-page title="邮箱验证" backable>
        <div class="common-container container">
            <div class="page-simple-box">
                <div>
                    <ui-text-field v-model="email" label="邮箱" disabled />
                </div>
                <div>
                    <ui-text-field v-model="code" label="验证码" />
                    <button type="button" @click="sendCode">发送验证码</button>
                </div>
                <br>
                <br>
                <ui-raised-button label="验证" primary @click="valid"/>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                code: '',
            }
        },
        mounted() {
            this.email = this.$route.query.email
            // this.valid()
        },
        methods: {
            sendCode() {
                this.$http.get(`/send_valid_code?email=${this.email}`)
                    .then(response => {
                        let data = response.data
                        this.$message({
                            type: 'success',
                            text: '已发送验证码到邮箱'
                        })
                    },
                    response => {
                        console.log(response)
                    })
            },
            valid() {
                if (!this.email) {
                    this.$message({
                        type: 'danger',
                        text: '请输入邮箱'
                    })
                    return
                }
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请输入验证码'
                    })
                    return
                }
                this.$http.get(`/email/valid?email=${this.email}&code=${this.code}`)
                    .then(response => {
                        let data = response.data
                        // alert('邮箱验证成功，点击确定快速登录')
                        this.$router.go(-1)
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

<style lang="scss" scoped>
.page-simple-box {
    max-width: 320px;
}
</style>
