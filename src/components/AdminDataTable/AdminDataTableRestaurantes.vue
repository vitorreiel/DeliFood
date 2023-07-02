<template>
	<div v-if="!this.loading">
		<VueTable
			:rows="tableData"
			:columns="columns"
			:sort-options="sortOptions"
			theme="polar-bear"
			styleClass="vgt-table"
			:search-options="{
					enabled: true,
		}"/>
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
		  { field: 'nome', label: 'Nome', sortable: true },
			{ field: 'actions', label: 'Ações' }
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

		this.$axios
		  .get('/restaurantes', { params })
		  .then((response) => {
				this.tableData = response.data;
		  })
		  .catch((error) => {
				console.error(error);
		  })
		  .finally(() => this.loading = false);
	  },
	},
	mounted() {
	  this.fetchData();
	},
	components: { VueTable }
  };
</script>

  