<template>
    <div>
        <div class="w-25">
            <input v-model="email" type="text" class="form-control" placeholder="email">
            <input v-model="password" type="password" class="form-control" placeholder="password">
            <input @click.pre.prevent="login" type="submit" class="btn btn-primary" value="Login">
            <div v-if="error" class="text-danger">{{ error }}</div>
        </div>
    </div>
</template>

<script>
import router from "../../router";
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login() {
            axios.post('/api/auth/login', {email: this.email, password: this.password})
            .then( res => {
                localStorage.setItem('access_token', res.data.access_token)
                this.$router.push({name: 'user.personal'})
            })
            .catch( error => {
                this.error = error.response.data.error
            })
        }
    },
}
</script>

<style scoped>

</style>
