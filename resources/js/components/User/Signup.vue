<template>
    <div>
        <div class="w-25">
            <input type="text" class="form-control" placeholder="name" v-model="name">
            <input type="text" class="form-control" placeholder="email" v-model="email">
            <input type="password" class="form-control" placeholder="password" v-model="password">
            <input type="password" class="form-control" placeholder="password confirm" v-model="password_confirmation">
            <input @click.prevent="store" type="submit" class="btn btn-primary" value="Signup">
            <div v-if="error" class="text-danger">{{ error }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Signup",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            error: ''
        }
    },
    methods: {
        store() {
            axios.post('/api/users',
                {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
            .then( res => {
                localStorage.setItem('access_token', res.data.access_token)
                this.$router.push({name: 'user.personal'})
            })
            .catch( error => {
                this.error = error.response.data.error
            })
        }
    }
}
</script>

<style scoped>

</style>
