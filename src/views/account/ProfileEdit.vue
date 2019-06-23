<template>
    <my-page name="app" :page="page" backable>
        <div class="common-container container">
            <div v-if="user">
                <div>
                    <ui-text-field v-model="user.description" label="简介" />
                </div>
                <ui-select-field v-model="user.sex" label="性别">
                    <ui-menu-item value="1" title="男"/>
                    <ui-menu-item value="2" title="女"/>
                    <ui-menu-item value="3" title="其他"/>
                </ui-select-field>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                page: {
                    title: '编辑资料',
                    menu: [
                        {
                            type: 'icon',
                            icon: 'check',
                            title: '保存',
                            click: this.finish
                        }
                    ]
                },
                user: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            modifyAvatar() {
                this.$message({
                    type: 'info',
                    text: '功能暂未实现'
                })
            },
            getAvatar() {
                return this.user.avatar
            },
            handleClick (newIndex) {
            },
            init() {
                this.$http.get('/me')
                    .then(response => {
                        let data = response.data
                        this.user = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            finish() {
                // if (!this.user.de) {
                //     this.$message({
                //         type: 'danger',
                //         text: '请输入邮箱'
                //     })
                //     return
                // }
                this.$http.post(`/updateProfile`, this.user)
                    .then(response => {
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
.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
</style>
