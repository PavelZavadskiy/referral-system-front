<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      external_user_id: '',
      project_Id: '',
      referrer_id: null,
      newUser: null,
    };
  },
  props: ['func'],
  computed: {},
  methods: {
    getAllUsers() {
      axios.get('users').then(resp => {
        this.users = resp.data;
      });
    },
  },
  beforeMount() {
    this.getAllUsers();
  },
};
</script>

<template>
  <table>
    <tbody>
      <tr>
        <th v-for="(value, key) in users[0]" :key="key">{{ key }}</th>
      </tr>
      <tr v-for="item in users" :key="item.id">
        <td v-for="value in item" :key="value">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
