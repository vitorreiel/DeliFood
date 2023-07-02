<template>
    <div v-if="!loading">
        <h1>{{ title }}</h1>
        {{ restaurant }}
    </div>

    <div v-else>
		<p>Carregando...</p>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Manage restaurant",
                restaurant: null,
                loading: false,
            }
        },
        mounted() {
            const restaurantId = this.$router.currentRoute.value.query.id;

            if (restaurantId) {
                this.getRestaurant(restaurantId);
            }
        },
        methods: {
            getRestaurant(id) {
                this.loading = true;

                this.$axios
                    .get(`/restaurantes/${id}`)
                    .then((response) => {
                        this.restaurant = response.data;
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => (this.loading = false));
            }
        }
    }
</script>
