<template>
	<div v-if="!this.loading">
		<VueTable
			:rows="tableData"
			:columns="columns"
			:sort-options="sortOptions"
			@sort-change="onSortChange"
			theme="polar-bear"
			styleClass="vgt-table"
			:search-options="{
				enabled: true,
			}"
		/>
	</div>
	<div v-else>
		<p>Carregando...</p>
	</div>
</template>
  
<script>
  import 'vue-good-table-next/dist/vue-good-table-next.css';
  import { VueGoodTable as VueTable } from 'vue-good-table-next';

  export default {
	props: ['type'],
	data() {
	  return {
		tableData: [],
		loading: true,
		columns: [
		  { field: 'id', label: 'ID', sortable: true },
		  { field: 'restaurante.nome', label: 'Restaurante', sortable: true },
		  { field: 'user_id.username', label: 'Usuário', sortable: true },
		  { 
			field: 'data_hora',
			label: 'Data',
			sortable: true,
			type: 'date',
			dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
			dateOutputFormat: 'dd/MM/yyyy',
		  },
		  {
			field: 'total',
			label: 'Valor',
			sortable: true,
    		formatFn: this.formatFn,
		  },
		],
		sortOptions: {
		  enabled: true,
		  initialSortBy: { key: 'id', type: 'asc' },
		},
	  };
	},
	methods: {
	  fetchData() {
		const params = {
		  _sort: `${this.sortOptions.initialSortBy.type === 'asc' ? '' : '-'}${this.sortOptions.initialSortBy.key}`
		};

		this.loading = true;

		this.$axios.get("/historicos", { params })
			.then(async (response) => {
				let data = response.data;

				this.tableData =  data;
			}).catch((error) => {
				console.error(error);
			}).finally(() => this.loading = false);
	  },
	  formatFn: function(value) {
		return 'R$ ' + value;
	  }
	},
	mounted() {
	  this.fetchData();
	},
	components: { VueTable }
  };
</script>

  