<template>
  <v-card>
    <v-card-title>New User Registration</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">

      <v-row>
        <v-col cols="2">
          <v-text-field v-model="username" :rules="usernameRules" label="user"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-text-field  v-model="password" :rules="passwordRules"  label="password"></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" color="primary" type="submit">Register</v-btn>
    </v-form>
  </v-card-text>
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: 'king.arthur@camelot.net',
      password: 'foobar',
      valid: false,
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length >= 3) || 'Username must be at least 3 characters'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be at least 6 characters'
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
        try {
          const response = await axios.post('http://localhost:8000/auth/register', {
            email: this.username,
            password: this.password
        });
          console.log('Form submitted:', response.data);
          // Handle successful response here (e.g., redirect to another page)
        } catch (error) {
          console.error('Error submitting form:', error);
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
