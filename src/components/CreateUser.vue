<script>
import axios from 'axios';

export default {
  data() {
    return {
      external_user_id: '',
      project_Id: '',
      referrer_id: null,
      newUser: null,
      error: '',
    };
  },
  props: ['title'],
  computed: {},
  methods: {
    createUser() {
      if (this.external_user_id.length > 0 && this.project_Id > 0) {
        axios
          .post('users', {
            external_user_id: this.external_user_id,
            project_Id: this.project_Id,
            referrer_id: this.referrer_id,
          })
          .then(resp => {
            this.newUser = resp.data;
            this.error = null;
          })
          .catch(err => {
            this.error = err;
          });
        this.external_user_id = '';
        this.project_Id = '';
        this.referrer_id = null;
      }
    },
  },
};
</script>

<template>
  <input type="text" v-model="external_user_id" placeholder="Введите external_user_id" />
  <input type="text" v-model="project_Id" placeholder="Введите project_Id" />
  <input type="number" v-model="referrer_id" placeholder="Введите referrer_id" />
  <button @click="createUser()">Create user</button>
  <p class="error" v-if="error">{{ error.response.data.message }}</p>
  <table>
    <tbody>
      <tr>
        <th v-for="(value, key) in newUser" :key="key">{{ key }}</th>
      </tr>
      <tr>
        <td v-for="value in newUser" :key="value">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.error {
  color: red;
}
</style>
