import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  users: []
}

const getters = {
  allUsers: (state) => state.users
}

const actions = {
  getUsers({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response)
        commit('SET_USERS', response.data)
      })
  }
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
