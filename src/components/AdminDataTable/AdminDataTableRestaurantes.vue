<template>
	<div class="add-btn-wrapper">
		<router-link to="/administrator/restaurant">
			<button class="add-btn">
				<i class='bx bx-plus-circle'></i>
				Adicionar restaurante
			</button>
		</router-link>
	</div>

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
					<router-link :to="`/administrator/restaurant?id=${props.row.id}`">
						<button class="table-icon-btn edit">
							<i class='bx bx-edit'></i>
						</button>
					</router-link>
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
			this.loading = true;

			this.$axios
				.delete(`/restaurantes/${id}`)
				.catch((error) => {
					console.error(error);
				})
				.finally(() => (this.loading = false));
		},
		handleAddAction() {
			console.log("AAAA");
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

	.add-btn-wrapper {
		width: 100%;
		padding: 12px 0;
		display: flex;
		justify-content: end;
	}

	.add-btn-wrapper .add-btn {
		background-color: rgb(0, 140, 0);
		border-radius: 4px;
		font-weight: bold;
		color: white;
		border: none;
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 12px 24px;
		transition: all ease-in-out 350ms;
	}

	.add-btn-wrapper .add-btn:hover {
		background-color: rgb(0, 160, 0);
	}
</style>
  