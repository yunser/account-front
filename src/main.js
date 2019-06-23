import Vue from 'vue'
import App from './App'
import router from './router'
import {domain} from '@/config'

import './scss/main.scss'
import ui from './components/index'
import http from './util/http'
import qs from 'qs'
import storage from './util/storage'
import cookie from './util/cookie'
import './scss/index.scss'
import store from '@/store/index'

Vue.use(ui)

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$qs = qs
Vue.prototype.$domain = domain
Vue.prototype.$storage = storage
Vue.prototype.$cookie = cookie


let accessToken = cookie.get('accessToken')
if (accessToken) {
    console.log('自动登录')
    http.get('https://nodeapi.yunser.com/login/access_token?access_token=' + accessToken).then(
        response => {
            let data = response.data
            storage.set('user', data.user)
            cookie.set('accessToken', data.accessToken)
            store.state.user = data.user
            store.state.loginState = '' + new Date().getTime()
            // this.redirect()
            // router.go(0)
        },
        response => {
            console.log(response)
        })
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
