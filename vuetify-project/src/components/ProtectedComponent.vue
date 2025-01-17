<template>
  <v-card>
    <v-card-title>Protected Page</v-card-title>
    <v-card-text>
      <p>Should only be shown if user is authenticated</p>
    </v-card-text>
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Protected Page',
  data() {
    return {
      username: 'username goes here',
    };
  },
  methods: {
  }, // end methods
};
</script>

<style scoped>
.v-container {
  max-width: 400px;
  margin: 0 auto;
}
</style>
