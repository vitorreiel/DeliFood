<template>
  <div v-if="type == 'clientes'">
    <AdminDataTableClientes />
  </div>

  <div v-else-if="type == 'restaurantes'">
    <AdminDataTableRestaurantes />
  </div>

  <div v-else-if="type == 'pedidos'">
    <AdminDataTablePedidos />
  </div>
</template>

<script>
import AdminDataTableClientes from './AdminDataTable/AdminDataTableClientes.vue';
import AdminDataTableRestaurantes from './AdminDataTable/AdminDataTableRestaurantes.vue';
import AdminDataTablePedidos from './AdminDataTable/AdminDataTablePedidos.vue';

export default {
  props: ['type'],
  components: {
    AdminDataTableClientes,
    AdminDataTableRestaurantes,
    AdminDataTablePedidos
  }
}
</script>

<style scoped>

</style>