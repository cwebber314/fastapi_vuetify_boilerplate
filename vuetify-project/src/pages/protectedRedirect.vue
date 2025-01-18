<template>
  <v-card>
    <v-card-title>Protected Page (with redirect)</v-card-title>
    <v-card-text>
      <p>This is similar to the protected page, but should redirect you to the login page if you're not authorized</p>
      <p>Protected Message: {{ msg }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';
import { useStore } from '../stores/store';

export default {
  data() {
    return {
      store: useStore(),
      msg: '...',
    };
  },
  mounted: function () {
    console.log("mounted")
    this.getProtectedData()
  }, // end mounted
  methods: {
    async getProtectedData() {
      let _this = this
      console.log("getProtectedData()")
      try {
        console.log("axios get - before")
        const response = await axios.get('http://localhost:8000/authenticated-route',
          {
            headers: { 'Authorization': 'Bearer ' + this.store.access_token }
          }
        );
        console.log("axios get after")
        this.msg = response.data['message']
      } catch (err) {
        console.log(err)
        this.msg = 'error'
      }
    }, // end getProtectedData
    getProtectedData2: function () {
      let _this = this
      let url = 'http://localhost:8000/authenticated-route'
      axios.get(url, {
        headers: {
          'Authorization': `Bearer ` + _this.store.access_token
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
    }, 
  }, // end methods
};
</script>

<style scoped>
.v-container {
  max-width: 400px;
  margin: 0 auto;
}
</style>