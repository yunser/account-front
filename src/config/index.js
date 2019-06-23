let apiDomain
let domain

if (process.env.NODE_ENV === 'production') {
    domain = {
        // api: 'https://api.yunser.com'
        api: 'https://nodeapi.yunser.com'
    }
} else {
    domain = {
        api: 'http://localhost:1026',
        // api: 'https://api.yunser.com',
        // api: 'https://nodeapi.yunser.com',
        // api: 'http://localhost:1030',
        img: 'img1.yunser.com'
    }
}

module.exports = {
    apiDomain,
    domain
}
