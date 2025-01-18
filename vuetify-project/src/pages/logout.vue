<template>
  <v-card>
    <v-card-title>Logout</v-card-title>
    <v-card-text>
      isAuthenticated: {{ store.isAuthenticated }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="logout" color="primary">Logout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
import { useStore } from '../stores/store';

export default {
  data() {
    return {
      store: useStore(),
      username: 'username goes here',
    };
  },
  methods: {
    async logout() {
      console.log("logout()")
      try {
        const response = await axios.post('http://localhost:8000/auth/jwt/logout', 
          {},
          {
            headers: {
              'Authorization': 'Bearer ' + this.store.access_token
            }
          }
        );
        console.log("response")
        console.log(response)
        this.store.isAuthenticated = false
        this.store.access_token = null
      } catch (error) {
        console.log(error)
      }
    }, // end logout
  }, // end methods
};
</script>
