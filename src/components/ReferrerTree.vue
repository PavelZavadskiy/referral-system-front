<script>
import axios from 'axios';
import Tree from './TreeDisp.vue';

export default {
  data() {
    return {
      users: [],
    }
  },
  props: ['func'],
  computed: {
  },
  methods: {
    getAllUsers() {
      this.users;
      axios.get('users')
        .then(resp => {
          // this.users = resp.data;
          const allUsers = resp.data;
          function buildTree (refferers) {
            const map = new Map(refferers.map(item => [item.id, item]));
            for (let item of map.values()) {
              if (!map.has(item.referrer_id)) {
                continue;
              }
              const parent = map.get(item.referrer_id);
              parent.children = [...parent.children || [], item];
            }
            return [...map.values()].filter(item => !item.parent);
          }

          this.users = buildTree(allUsers);
        });

      
    },
    getAllReferrersByUser(id) {
      axios.get(`referrers/${id}`)
        .then(resp => {
          this.users = resp.data;
        });
    }
  },
  components: {
    Tree,
  },
  beforeMount() {
    this.getAllUsers();
  }
}
</script>

<template>
    <div class="object">
      <h2>{{ func }}</h2>
      <div class="all_trees">
        <div v-for="user in users" :key="user.id">
          <tree :tree-data="user"></tree>
        </div>
      </div>
    </div>

</template>

<style scoped>
.user {
  color: blue;
}

.referrer{
  color: green;
  margin-left: 16px;
}
</style>