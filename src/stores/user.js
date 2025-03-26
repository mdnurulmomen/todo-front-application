import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
      currentUser: null,
      currentToken: null,
  }),
  getters: {
    isAuthenticated: (state) => state.currentUser,
  },
  actions: {
    setToken(token) {
        this.currentToken = token;
        localStorage.setItem('authToken', token);
    },
    setUser(user) {
      this.currentUser = user;
      localStorage.setItem('authUser', JSON.stringify(user));
    },
    clearStorage() {
      this.currentUser = null;
      this.currentToken = null;
      localStorage.removeItem('authUser');
      localStorage.removeItem('authToken');
    },
    loadUserFromLocalStorage() {
      const userString = localStorage.getItem('authUser');
        // console.log(userString);
      if (userString) {
        this.currentUser = JSON.parse(userString) || null;
      }
    },

    loadTokenFromLocalStorage() {
        const tokenString = localStorage.getItem('authToken');
        // console.log(tokenString);
        if (tokenString) {
          this.currentToken = tokenString || null;
        }
    },
  }
});