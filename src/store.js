import { createStore as createVuexStore } from 'vuex'

const createStore = () =>
  createVuexStore({
    state: {
      message: 'Vue without bundler boilerplate',
    },
    mutations: {
      REVERSE_MESSAGE(state, message) {
        state.message = message.split('').reverse().join('')
      },
    },
    actions: {
      reverseMessage({ commit }, message) {
        commit('REVERSE_MESSAGE', message)
      },
    },
    getters: {
      message: (state) => state.message,
    },
  })

export default createStore()
