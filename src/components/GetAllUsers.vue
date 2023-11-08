<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      external_user_id: "",
      project_Id: "",
      referrer_id: null,
      newUser: null,
    }
  },
  props: ['func'],
  computed: {
  },
  methods: {
    getAllUsers() {
      axios.get('users')
        .then(resp => {
          this.users = resp.data;
        });
    },
  },
}
</script>

<template>
    <div class="object">
      <h2>{{ func }}</h2>
      <button @click="getAllUsers()">Get all user</button>
      <table >
        <tbody>
          <tr>
            <th v-for="(value, key) in users[0]" :key="key">{{ key }}</th>
          </tr>
          <tr v-for="item in users" :key="item.id">
            <td v-for="value in item" :key="value">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

</template>

<style scoped>

</style>