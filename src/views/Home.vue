<template>
    <my-page name="home" title="账号" :page="page">
        <div class="common-container container">
            <div v-if="$store.state.user">你已经登录了</div>
            <ui-container top v-if="!$store.state.user">
                <div class="slogan">注册一个账号，给你整个世界</div>
                <div class="btn-box">
                    <ui-raised-button class="btn" label="注册" to="/register" primary/>
                    <ui-raised-button class="btn" label="登录" to="/login" secondary/>
                </div>
                <!--<div>链接一切</div>-->
                <!--<a href="/">工作</a>-->
                <!--<a href="/">学习</a>-->
                <!--<a href="/">生活</a>-->
                <!--<a href="/">娱乐</a>-->
            </ui-container>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                qrcodeUrl: '',
                isLogin: false,
                user: null,
                // 主题
//                theme: 'light',
//                themes: {
//                    light,
//                    dark,
//                    carbon,
//                    teal
//                },
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=account',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=account',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.qrcodeUrl = 'http://localhost:1026/qrcode?content=' + encodeURIComponent('https://www.yunser.com')
                // 检查登录
                if (this.$storage.get('accessToken')) {
                    this.isLogin = true
                    this.user = this.$storage.get('user')
                    console.log(this.user)
                }
            },
            loginOut() {
                // TODO 请求
                this.$storage.set('accessToken', null)
                this.$storage.set('user', null)
                this.isLogin = false
                this.user = null
            },
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            add() {
//                this.changeTheme('light')
                this.$router.push('/add')
            },
            // 主题
            changeTheme(theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''
            },
            getThemeStyle() {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                return styleEl
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slogan {
        margin-top: 80px;
        text-align: center;
        font-size: 24px;
        margin-bottom: 80px;
    }
    .btn-box {
        text-align: center;
        .btn {
            margin-right: 8px;
        }
    }
</style>
