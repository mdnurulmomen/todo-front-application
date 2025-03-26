<template>
    <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="login-container">
      <div class="card login-card">
        <div class="card-body">
          <div class="login-header">
            <h3>Login</h3>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" v-model="email" id="username" placeholder="Enter your username" required />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" id="password" placeholder="Enter your password" required />
            </div>

            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="rememberMe" v-model="rememberMe" />
              <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>

            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
        </div>
        <div class="card-footer">
            <p v-if="error" class="text-danger mt-3 mb-0 text-center">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

    import { useUserStore } from '@/stores/user';

    export default {
        data() {
            return {
                email: '',
                password: '',
                rememberMe: '',
                error: '',
                userStore: useUserStore()
            };
        },

        methods: {
            async login() {
                axios
                    .post('http://127.0.0.1:8000/api/v1/login', {
                        email: this.email,
                        password: this.password,
                        rememberMe: '',
                    })
                    .then(response => {
                        // console.log(response);
                        if (response.status == 200) {
                            // console.log(response);
                            this.userStore.setUser(response.data.user)
                            this.userStore.setToken(response.data.token)
                            this.$router.push('/home');
                        }
                    })
                    .catch(error => {
                        // console.log(error);
                        // Request made and server responded
                        if (error.response) {
                            // console.log(error.response.data);
                            // console.log(error.response.status);
                            // console.log(error.response.headers);
                            // console.log(error.response.data.errors[x]);
                            this.userStore.clearStorage();
                            this.error = error.response.data.message || 'Login failed'; 
                        }
                        // The request was made but no response was received
                        else if (error.request) {
                            console.log(error.request);
                        }
                        // Something happened in setting up the request that triggered an Error
                        else {
                            console.log('Error', error.message);
                        }

                    })
                    .finally(response => {

                    });

            }             
        }
    }
</script>

<style lang="css" scoped>
    /* Center the login form */
    .login-container {
    max-width: 400px;
    margin: 100px auto;
    }

    .login-card {
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    }

    .login-header {
    text-align: center;
    margin-bottom: 1.5rem;
    }

    .login-footer {
    text-align: center;
    margin-top: 1rem;
    }

    /* Align labels to the left */
    .form-label {
    text-align: left;
    margin-bottom: 0.75rem; /* Gap between label and input */
    }

    /* Add margin to inputs */
    .form-control {
    width: 100%;
    }

    /* Additional styling for checkbox */
    .form-check-label {
    margin-left: 5px;
    }
</style>