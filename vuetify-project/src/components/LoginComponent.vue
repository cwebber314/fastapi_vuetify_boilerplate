<template>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">

      <v-row>
        <v-col cols="2">
          <v-text-field v-model="username" label="user" :rules="usernameRules"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-text-field  v-model="password" label="password" :rules="passwordRules"></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" color="primary" type="submit">Login</v-btn>
    </v-form>
    <p>access_token: {{ access_token }}</p>
  </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';
import { useStore } from '../stores/store';

export default {
  name: 'LoginForm',
  data() {
    return {
      store: useStore(),
      username: 'king.arthur@camelot.net',
      password: 'foobar',
      valid: false,
      access_token: null,
      usernameRules: [
        v => !!v || 'Username is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    };
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        // Handle form submission here
        console.log('Form submitted:', {
          username: this.username,
          password: this.password
        });
        // these are form-urlencoded - I'm not sure why, but that's how FastAPI users wants them
        const params = new URLSearchParams();
        params.append('username', this.username);
        params.append('password', this.password);
        try {
          const response = await axios.post('http://localhost:8000/auth/jwt/login', params);
          console.log('Form submitted:', response.data);
          this.access_token = response.data['access_token']
          this.store.access_token = response.data['access_token']
          // TODO: Store this access token somewhere so you can provide it again
          // Handle successful response here (e.g., redirect to another page)
        } catch (error) {
          console.error('Error submitting form:', error);
          this.access_token = 'error'
          // Handle error response here (e.g., show an error message)
        }
      }
    }
  },
};
</script>

<style scoped>
.v-container {
  max-width: 400px;
  margin: 0 auto;
}
</style>
