// stores/counter.js

import {defineStore} from 'pinia';

export const useCounterPersistStore = defineStore('counterPersist', {
    state: () => ({
        options: {
            x: 0,
            y: 0,
            z: 0,
        },
        message: 'hello world',
    }),
    actions: {
        increment(option) {
            this.options[option]++;
        },
    },
    getters: {
        totalClicks() {
            return Object.values(this.options).reduce((total, current) => {
                return total + current;
            }, 0);
        },
    },
    persist: true,
});