// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'


// const app = createApp(App);

// app.mount('#app');

import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import AllUsersPage from './pages/AllUsersPage.vue';
import CreateUserPage from './pages/CreateUserPage.vue';
import ReferrerTreePage from './pages/ReferrerTreePage.vue';
// import {smart-grid} from 'smart-webcomponents';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'AllUsers',
      path: '/',
      component: AllUsersPage,
    },
    {
      name: 'CreateUser',
      path: '/create-user',
      component: CreateUserPage,
    },
    {
      name: 'ReferrerTree',
      path: '/referrers',
      component: ReferrerTreePage,
    },
  ],
});



const app = createApp(App).use(router)
// app.component('smart-grid', smart-grid);

app.mount('#app');
