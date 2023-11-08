<script>
import axios from 'axios';
import CreateUser from './components/CreateUser.vue';
import GetAllUsers from './components/GetAllUsers.vue';

axios.defaults.baseURL = 'http://localhost:3000/api/ref-system/';

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
  computed: {
    setTitleGetAllUsers(){
      return "Get all users"
    },
  },
  methods: {},
  components: {
    CreateUser,
    GetAllUsers
  },
}
</script>

<template>
  <div class="wrapper">
    <GetAllUsers :func="setTitleGetAllUsers"/>
    <CreateUser title="Create user" />
  </div>
</template>

<style scoped>
</style>
