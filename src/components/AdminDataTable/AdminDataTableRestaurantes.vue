<template>
	<div v-if="!this.loading">
		<VueTable
			:rows="tableData"
			:columns="columns"
			:sort-options="sortOptions"
			theme="polar-bear"
			styleClass="vgt-table"
			:search-options="{ enabled: true }"
		>
			<template #table-row="props">
				<span v-if="props.column.field == 'actions'">
					<button class="table-icon-btn edit" @click="handleEditAction(props.row.id)">
						<i class='bx bx-edit'></i>
					</button>
					<button class="table-icon-btn delete" @click="handleDeleteAction(props.row.id)">
						<i class='bx bx-trash'></i>
					</button>
				</span>
				<span v-else>
					{{props.formattedRow[props.column.field]}}
				</span>
			</template>
		</VueTable>
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
			{ field: 'nome', label: 'Nome', sortable: false },
			{ field: 'actions', label: 'Ações', sortable: false }
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
		handleEditAction(id) {
			console.log(id);
		},
		handleDeleteAction(id) {
			console.log(id);
		}
	},
	mounted() {
	  this.fetchData();
	},
	components: { VueTable }
  };
</script>

<style scoped>
	.table-icon-btn {
		background-color: transparent;
		border: none;
		font-size: 16px;
	}

	.table-icon-btn.delete {
		color: rgb(250, 0, 0);
	}

	.table-icon-btn.edit {
		color: rgb(0, 0, 150);
	}
</style>
  