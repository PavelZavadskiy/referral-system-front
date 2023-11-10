<template>
  <div class="wrapper">
    <h1>Registered users</h1>
    <GetAllUsers />
  </div>
</template>

<script>
import GetAllUsers from '../components/GetAllUsers.vue';

export default {
  components: {
    GetAllUsers,
  },
};
</script>
