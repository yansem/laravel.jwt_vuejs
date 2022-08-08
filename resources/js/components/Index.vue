<template>
    <div>
        <router-link :to="{name: 'fruit.index'}">Index</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
