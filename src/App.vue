<template>
  <div v-if="userStore.isAuthenticated">
    <nav class="navbar navbar-expand-sm bg-white border-bottom">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">
          <img src="@/assets/logo.svg" alt="To Do App Logo" height="30" class="d-inline-block align-top" />
        </RouterLink>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <RouterLink
                to="#"
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                {{ userStore.currentUser?.name || 'User' }}
              </RouterLink>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <RouterLink
                    class="dropdown-item"
                    to="#"
                    @click="logout"
                  >Logout</RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    <div class="container-fluid mt-3">
      <menu-bar/>
    </div>
  </div>

  <div class="container" v-else>
    <div class="row">
      <div class="col-md-2 col-lg-2"></div>
      <div class="col-sm-12 col-md-8 col-lg-8">
        <!-- Login Page -->
        <router-view/>
      </div>
      <div class="col-md-2 col-lg-2"></div>
    </div>
  </div>  
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/stores/user';

  const router = useRouter();
  const userStore = useUserStore();

  const logout = () => {
    userStore.logout();
    router.push('/login');
    // window.location.reload();
  };
</script>