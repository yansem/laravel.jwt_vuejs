<template>
    <div>
        <router-link v-if="accessToken" :to="{name: 'fruit.index'}">Index</router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.login'}">Login</router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.signup'}">Signup</router-link>
        <router-link v-if="accessToken" :to="{name: 'user.personal'}">Personal</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            accessToken: null
        }
    },
    updated() {
        this.getAccessToken()
    },
    mounted() {
        this.getAccessToken()
    },
    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        }
    }
}
</script>

<style scoped>

</style>
