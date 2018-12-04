<template>
  <div>
    <h1>Список пользователей</h1>
    <div v-if="!users.length" class="alert alert-primary" role="alert">Загрузка...</div>
    <user-list v-else :list="users"></user-list>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Users',
  components: {
    'user-list': UserList,
  },
  data: function(){
    return {
      users: [],
    }
  },
  computed: {
  },
  watch: {
  },
  mounted(){
    this.loadUsers();
  },
  methods: {
    loadUsers(){
      axios.get('http://localhost:3004/users')
        .then(response => response.data)
        .then(response => (this.users = response))
        .catch(error => console.error(error))
    }
  }
}
</script>
