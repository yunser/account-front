<template>
    <my-page name="home" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />

            <!-- <router-link to="/account/profile">个人资料</router-link> -->
            
            <ui-raised-button secondary label="退出登录" @click="loginout" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                page: {
                    title: '个人中心'
                },
                items: [{
                    name: '跑步',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                },{
                    name: '吃饭',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }, {
                    name: '吃饭',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }],
                bottomNav: 'recents',
                groups: [
                    {
                        // name: '分类',
                        apps: [
                            {
                                name: '个人资料',
                                desc: '',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
                                to: '/account/profile',
                            },
                            {
                                name: '登录记录',
                                desc: '',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
                                to: '/account/loginLog',
                            },
                            {
                                name: '修改密码',
                                desc: '',
                                icon: 'https://icons.yunser.com/icons/tool.svg',
                                to: '/password/update',
                            },
                        ]
                    },
                ],
            }
        },
        mounted() {
            console.log(new Date().getTime())
        },
        methods: {
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            handleChange(val) {
                this.bottomNav = val
            },
            loginout() {
                this.$storage.set('accessToken', null)
                this.$storage.set('user', null)
                this.isLogin = false
                this.user = null
                this.$cookie.remove('accessToken')
                this.$store.state.user = null
                
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .page-side {
        position: absolute;
        top: 0;
        left: 0;
        width: 256px;
        height: 100%;
    }
    .page-content {
        position: absolute;
        top: 0;
        left: 256px;
        right: 0;
        height: 100%;
    }
    .ui-paper-1 {
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
    }
</style>
