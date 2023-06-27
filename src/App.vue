<template>
  <Header />
  <router-view />
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
