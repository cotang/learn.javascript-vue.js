import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios.js'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
      navbarTitle: 'Vuex test title',
      navbarMain: 'Главная',
      users: []
    },
    getter: {
      titleCount: state => state.navbarTitle.length
    },
    mutations: {
      changeTitle: (state, payload) => (state.navbarTitle = payload),
      changeNavMain: (state, payload) => (state.navbarMain = payload),
      setUsers: (state, payload) => (state.users = payload)
    },
    actions: {
      loadUsers(context) {
        axios
          .get('/users')
          .then(response => response.data)
          .then(response => context.commit('setUsers', response))
          .catch(error => console.error(error))
      },
      goToUsersPage() {
        this.$router.push('/users')
      }
    }
  })

export default store
