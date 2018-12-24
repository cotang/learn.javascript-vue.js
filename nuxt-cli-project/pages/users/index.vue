<template>
  <div>
    <h1>Список пользователей</h1>
    <div
      v-if="!users.length"
      class="alert alert-primary"
      role="alert">Загрузка...</div>
    <div v-else>
      <user-list :users="users"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Users',
  components: {
    'user-list': UserList
  },
  asyncData() {
    return axios
      .get('http://localhost:3004/users')
      .then(response => response.data)
      .then(response => {
        return { users: response }
      })
      .catch(error => console.error(error))
  },
  // computed: {
  //   users() {
  //     return this.$store.state.users
  //   }
  // },
  mounted() {
    this.$store.dispatch('loadUsers')
  }
}
</script>
