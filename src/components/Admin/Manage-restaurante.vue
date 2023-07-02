<template>
    <h1>{{ title }}</h1>
    {{ $router.currentRoute.value.query }}
</template>

<script>
    export default {
        data() {
            return {
                title: "Manage restaurant"
            }
        }
    }
</script>
