<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="date">Data</th>
          <th class="produto">Produtos</th>
          <th class="endereco">Endereço</th>
        </tr>
      </thead>
      <tbody>
        <!-- Aqui é onde vai ser exibido a data do pedido -->
        <tr v-for="pedido in pedidos" :key="pedido.id"> 
          <td>{{ pedido.data }}</td> 
          <td>
            <!-- Aqui é onde vai ser exibido o nome do produto -->
            <ul>
              <li v-for="produto in pedido.produtos" :key="produto.id">
                {{ produto.nome }} 
              </li>
            </ul>
          </td>
          <!-- Aqui é onde vai ser exibido o endereço do pedido -->
          <td>{{ pedido.endereco }}</td> 
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HistoricoPedidos', 
  props: {
    pedidos: { //Aqui é onde vão ser exibido os pedidos
      type: Array, 
      required: true 
    }
  }
}
</script>
