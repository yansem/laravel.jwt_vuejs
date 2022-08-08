<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="fruit in fruits">
                <th scope="row">{{ fruit.id }}</th>
                <td>{{ fruit.title }}</td>
                <td>{{ fruit.price }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            fruits: null
        }
    },
    mounted() {
        this.getFruits()
    },
    methods: {
        getFruits() {
            axios.get('/api/fruits')
            .then( res => {
                console.log(res);
                this.fruits = res.data.data
            })
        }
    }
}
</script>

<style scoped>

</style>
