<template>
    <my-page name="app" :page="page" backable>
        <div class="common-container container">
            <ul class="avatar-list">
                <li class="item" v-for="item in avatars" @click="selectAvatar(item)">
                    <img class="avatar" :src="item">
                </li>
            </ul>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                avatars: [
                    'https://img1.yunser.com/avatar/avatar_1.jpg',
                    'https://img1.yunser.com/avatar/avatar_2.jpg',
                    'https://img1.yunser.com/avatar/avatar_3.jpg',
                    'https://img1.yunser.com/avatar/avatar_4.jpg',
                    'https://img1.yunser.com/avatar/avatar_5.jpg',
                    'https://img1.yunser.com/avatar/avatar_6.jpg',
                    'https://img1.yunser.com/avatar/avatar_7.jpg',
                    'https://img1.yunser.com/avatar/avatar_8.jpg',
                    'https://img1.yunser.com/avatar/avatar_9.jpg',
                    'https://img1.yunser.com/avatar/avatar_10.jpg',
                ],
                page: {
                    title: '编辑头像',
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'check',
                        //     title: '保存',
                        //     click: this.finish
                        // }
                    ]
                },
                user: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            // init() {
            //     this.$http.get('/me')
            //         .then(response => {
            //             let data = response.data
            //             this.user = data
            //         },
            //         response => {
            //             console.log(response)
            //         })
            // },
            selectAvatar(item) {
                this.$http.post(`/updateProfile`, {
                    avatar: item
                })
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
            },
        }
    }
</script>

<style lang="scss" scoped>
.avatar-list {
    display: flex;
    flex-wrap: wrap;
    .item {
        margin-right: 16px;
        margin-bottom: 16px;
    }
    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
}
</style>
