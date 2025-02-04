import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      access_token: null,
      isAuthenticated: false,
      userName: null
    }
  },
  persist: true,
})