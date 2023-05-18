<template>
    <section class="locations-list">
        <h3>Restaurantes</h3>
        <router-link :to="location.name === 'El Chancho' ? '/products' : ''" v-for="location in locations" class="location">
            <div class="photo">
                <img :src="location.photo">
            </div>
            <div class="description">
                <span class="name"> {{ location.name }} </span>
                <span class="address"> {{ location.address }} </span>
                <span class="phone"> {{ location.phone }} </span>
            </div>
        </router-link>
    </section>
</template>

<script>
    import { locations } from "../utils/locations"
    export default {
        data() {
            return {
                locations
            }
        }
    }
</script>

<style scoped>
    .locations-list {
        color: black;
        text-decoration: none;
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        max-width: 500px;
        min-width: 300px;
        max-height: 620px;
        overflow-y: scroll;
        justify-content: center;
        gap: 10px;
        background-color: #fff;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
    }

    a:-webkit-any-link {
        color: black;
        text-decoration: none;
    }

    .location {
        border: 1px solid lightgrey;
        padding: 20px 25px;
        display: flex;
        align-items: center;
        font-size: small;
        flex: 100%;
        cursor: pointer;
        text-align: center;
        border-radius: 7px;
    }

    .photo img {
        height: 60px;
        margin-top: -30%;
        margin-left: 10px;
    }

    .description {
        padding: 0;
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: 12px;
    }

    .name {
        font-weight: bold;
        font-size: large;
    }
</style>
