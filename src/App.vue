<script>
import axios from 'axios';
// import CreateUser from './components/CreateUser.vue';
// import GetAllUsers from './components/GetAllUsers.vue';
// import ReferrerTree from './components/ReferrerTree.vue';

axios.defaults.baseURL = 'http://localhost:3000/api/ref-system/';

export default {
  // data() {
  //   return {
  //     // users: [],
  //     // external_user_id: "",
  //     // project_Id: "",
  //     // referrer_id: null,
  //     // newUser: null,
  //   };
  // },
  // computed: {
  //   setTitleGetAllUsers() {
  //     return 'Get all users';
  //   },
  // },
  // methods: {},
  // components: {
  //   CreateUser,
  //   GetAllUsers,
  //   ReferrerTree,
  // },
};
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav_item">ALL USERS</RouterLink>
      <RouterLink to="/referrers" class="nav_item">REFERRER TREE</RouterLink>
      <RouterLink to="/create-user" class="nav_item">CREATE USER</RouterLink>
    </nav>
  </header>

  <RouterView />

  <!-- <div class="wrapper">
    <ReferrerTree />
    <GetAllUsers :func="setTitleGetAllUsers"/>
    <CreateUser title="Create user" />
  </div> -->
</template>

<style scoped>
header {
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid lightgrey;
}
nav {
  display: flex;
  gap: 32px;
  font-size: 20px;

  color: black;
}

.nav_item {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.nav_item:hover {
  color: rgb(64, 96, 156);
}

.router-link-active,
.router-link-exact-active {
  font-size: 20px;
  
  color: cornflowerblue;
}
</style>
