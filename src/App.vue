<template>
  <div v-if="userStore.isAuthenticated">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">To Do App Logo</a>
  
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                >{{ userStore.currentUser?.name || 'User' }}</a
              >
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Logout</a></li>
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
  import { useUserStore } from '@/stores/user';

  const userStore = useUserStore();
</script>