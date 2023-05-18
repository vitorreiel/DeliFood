<template>
    <section class="locations-list">
        <restaurantes />
    </section>
</template>

<script>
    import Restaurantes from '../components/Restaurantes.vue';
    import Products from '../components/Products.vue';

    export default {
        components: { 
            Restaurantes,
            Products
        }
    }
</script>

<style scoped></style>
