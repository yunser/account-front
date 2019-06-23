<template>
    <my-page title="登录记录">
        <div class="common-container container">
            <div class="empty" v-if="!logs.length">没有记录</div>
            <ul class="log-list">
                <li class="item" v-for="item in logs">
                    <div class="info">时间：{{ item.createTime }}</div>
                    <div class="info">设备：{{ item.device }}</div>
                    <div class="info">浏览器：{{ item.browser }}</div>
                    <div class="info">IP：{{ item.ip }}</div>
                </li>
            </ul>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const moment = window.moment

    export default {
        data () {
            return {
                logs: [],
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            loadData() {
                this.$http.get(`/loginLogs`)
                    .then(response => {
                        this.logs = response.data.map(item => {
                            return {
                                ...item,
                                createTime: moment(item.createTime).format('YYYY-MM-DD HH:mm')
                            }
                        })
                    },
                    response => {
                        console.log(response)
                        this.$message({
                            type: 'danger',
                            text: response.msg
                        })
                    })
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/var";
    .container {
        padding-top: 40px;
        max-width: 320px;
    }
    .empty {
        color: #999;
        padding: 160px;
        text-align: center;
    }
    .log-list {
        .item {
            border-bottom: 1px solid #000;
        }
        .info {
            margin-bottom: 8px;
        }
    }
</style>
