<template>
  <v-footer height="40" app>
    Footer. userName: {{ store.userName }} | access_token: {{ store.access_token }}
  </v-footer>
</template>

<script>
import axios from 'axios';
import { useStore } from '../stores/store';

export default {
  name: 'Protected Page',
  data() {
    return {
      store: useStore(),
    };
  },
  methods: {
  }, // end methods
};

</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
