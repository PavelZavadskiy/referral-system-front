<template>
  <div class="vue-root">
    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import 'smart-webcomponents/source/styles/smart.default.css';
import 'smart-webcomponents/source/modules/smart.grid.js';
import axios from 'axios';

export default {
  name: 'app',
  setup() {
    onMounted(() => {
      axios.get('users').then(resp => {
        
        const allUsers = resp.data;
             
        window.Smart(
          '#grid',
          class {
            get properties() {
              return {
                dataSource: new window.Smart.DataAdapter({
                  dataSource: allUsers,
                  keyDataField: 'id',
                  parentDataField: 'referrer_id',
                  id: 'id',
                  dataFields: [
                    'id: number',
                    'external_user_id: string',
                    'project_Id: string',
                    'referrer_id: number',
                    'createdAt: string',
                    'updatedAt: string',
                  ],
                }),
                sorting: {
                  enabled: true,
                },
                filtering: {
                  enabled: true,
                },
                behavior: {
                  columnResizeMode: 'growAndShrink',
                },
                // onRowInit: function (index, row) {
                //   if (row.id === 2) {
                //     row.expanded = true;
                //   }
                // },
                columns: [
                  {
                    label: 'id',
                    dataField: 'id',
                    width: 200,
                  },
                  {
                    label: 'external_user_id',
                    dataField: 'external_user_id',
                    width: 200,
                  },
                  {
                    label: 'project_Id',
                    dataField: 'project_Id',
                    width: 100,
                  },
                  {
                    label: 'referrer_id',
                    dataField: 'referrer_id',
                    width: 120,
                  },
                  {
                    label: 'createdAt',
                    dataField: 'createdAt',
                    // cellsFormat: "d",
                    width: 250,
                  },
                  {
                    label: 'updatedAt',
                    dataField: 'updatedAt',
                    // cellsFormat: "d",
                    width: 250,
                  },
                ],
              };
            }
          }
        );
      });
    });
  },
};
</script>

<style>
smart-grid {
  height: auto;
  width: 100%;
}
</style>
