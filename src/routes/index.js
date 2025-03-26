/* Import Pages */
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import TaskIndex from '@/pages/TaskIndex.vue';

const routes = [
    { path: '/', redirect: '/login' },
    { 
      path: '/login', 
      name:'login', 
      component: Login,
      meta: { 
        guest: true,
        requiresAuth: false 
      }
    },
    { 
      path: '/home', 
      name:'home', 
      component: Home,
      meta: { 
        requiresAuth: true 
      } 
    },
    { 
      path: '/tasks', 
      name:'tasks.index', 
      component: TaskIndex,
      meta: { 
        requiresAuth: true 
      }  
    }
];

import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  const isAuthenticated = localStorage.getItem('authToken');

  if (to.meta.requiresAuth && ! isAuthenticated) {
    next('/login');
  } else if (to.meta.guest && isAuthenticated) {
    // Guest route, but user is logged in.
    next('/home'); // Redirect to home
  } else {
    next();
  }
  
});

export default router;
