<template>
    <my-page name="app" :page="page">
        <div class="common-container container">
            <div v-if="user">
                <img class="avatar" :src="getAvatar()">
                <button @click="modifyAvatar">修改头像</button>
                <div>用户名：{{ user.name || '--' }}</div>
                <div>个人简介：{{ user.description || '--' }}</div>
                <div>性别：{{ user.sex | sex }}</div>
                
                <div>
                    邮箱：{{ user.email || '--' }}
                    <div v-if="user.email">
                        <span v-if="!user.isEmailValid">（未验证，去 <router-link :to="`/email/valid?email=${user.email}`">验证</router-link>）</span>
                        <span v-else>（已验证）</span>
                    </div>
                    

                </div>
                <div>手机号：{{ user.phone || '--' }}</div>
                <div>云设号：{{ user.code || '未设置' }}</div>
                <div>
                    个人主页：
                    <a :href="`https://home.yunser.com/users/${user.id}`" target="_blank">访问</a>
                </div>
                <div>
                    我的二维码：
                    <br>
                    <img :src="`https://nodeapi.yunser.com/qrcode?content=${encodeURIComponent('https://home.yunser.com/users/' + user.id)}`">
                </div>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                page: {
                    title: '基本资料',
                    breadcrumb: [
                        {
                            title: '账号管理',
                            to: '/account/profile'
                        },
                        {
                            title: '基本资料'
                        }
                    ],
                    menu: [
                        {
                            type: 'icon',
                            icon: 'edit',
                            title: '编辑资料',
                            to: '/profile/edit',
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
                this.$router.push('/avatar/edit')
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
            }
        },
        filters: {
            sex(value) {
                return {
                    '0': '--',
                    '1': '男',
                    '2': '女',
                    '3': '其他'
                }[value]
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
