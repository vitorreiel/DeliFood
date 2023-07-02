<template>
    <div v-if="!loading">
        <h1>{{ title }}</h1>
        {{ client }}
    </div>

    <div v-else>
		<p>Carregando...</p>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Manage client",
                client: null,
                loading: false,
            }
        },
        mounted() {
            const clientId = this.$router.currentRoute.value.query.id;

            if (clientId) {
                this.getUser(clientId);
            }
        },
        methods: {
            getUser(id) {
                this.loading = true;

                this.$axios
                    .get(`/users/${id}`)
                    .then((response) => {
                        this.client = response.data;
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => (this.loading = false));
            }
        }
    }
</script>
