/* eslint-disable */
const Cookies = window.Cookies
// TODO

let domain = location.hostname === 'localhost' ? 'localhost' : '.yunser.com'
const cookie = {
    set(name, value) {
        Cookies.set(name, value, {
            domain,
            path: '/'
        })
    },
    get(name) {
        return Cookies.get(name, {
            domain,
            path: '/'
        })
    },
    remove(name) {
        Cookies.remove(name, {
            domain,
            path: '/'
        })
    },
    // set(name, value, days) {
    //     var d = new Date()
    //     d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    //     window.document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString()
    // },
    // get(name) {
    //     var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    //     return v ? v[2] : null;
    // },
    // delete(name) {
    //     this.set(name, '', -1);
    // }
}

export default cookie
