<template>
  <v-card>
    <v-card-title>Counter
    </v-card-title>
    <v-card-text>
      Play with state using Pinia. Remember that after a reload all state information is lost.
      You can use localstorage to persist data.    
      <v-row>
        <v-col>
          Total Clicks: {{ store.totalClicks }}
        </v-col>
      </v-row>
      <v-row>
        <v-btn type="button" @click="store.increment('a')">
          Option A clicked {{ store.options['a'] }} times
        </v-btn>
      </v-row>
      <v-row>
        <v-btn type="button" @click="store.increment('b')">
          Option B clicked {{ store.options['b'] }} times
        </v-btn>
      </v-row>
      <v-row>
        <v-btn type="button" @click="store.increment('c')">
          Option C clicked {{ store.options['c'] }} times
        </v-btn>
      </v-row>
      <v-row>
        <v-col>
          Total Clicks: {{ store.totalClicks }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-card>
  <v-card-title>Counter Persist
    </v-card-title>
    <v-card-text>
      In this card we use the plugin pinia-plugin-persistedstate to persist the
      data between reloads.
      <v-row>
        <v-col>
          Total Clicks: {{ storePersist.totalClicks }}
        </v-col>
      </v-row>
      <v-row>
        <v-btn type="button" @click="storePersist.increment('x')">
          Option X clicked {{ storePersist.options['x'] }} times
        </v-btn>
      </v-row>
      <v-row>
        <v-btn type="button" @click="storePersist.increment('y')">
          Option Y clicked {{ storePersist.options['y'] }} times
        </v-btn>
      </v-row>
      <v-row>
        <v-btn type="button" @click="storePersist.increment('z')">
          Option Z clicked {{ storePersist.options['z'] }} times
        </v-btn>
      </v-row>
      <v-row>
        <v-col>
          Total Clicks: {{ storePersist.totalClicks }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Message: {{ storePersist.message }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';
import { useCounterStore } from '../stores/counter';
import { useCounterPersistStore } from '../stores/counterPersist';

export default {
  data() {
    return {
      store: useCounterStore(),
      storePersist: useCounterPersistStore()
    };
  },
  methods: {
  }, // end methods
};

</script>
