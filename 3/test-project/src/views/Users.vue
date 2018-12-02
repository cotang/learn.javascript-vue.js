<template>
  <div>
    <h1>Список пользователей</h1>
    <div v-if="!users.length" class="alert alert-primary" role="alert">Загрузка...</div>
    <user-list v-else :list="users" @choose="showUserDetails"></user-list>
    <user-item v-if="userIsChosen" :person="chosenUser"></user-item>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'
import UserItem from '@/components/UserItem.vue'

export default {
  name: 'Users',
  components: {
    'user-list': UserList,
    'user-item': UserItem,
  },
  data: function(){
    return {
      users: [],
      userIsChosen: false,
      chosenUser: {}
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
    },
    showUserDetails(id){
      this.userIsChosen = true;
      this.chosenUser = this.users[id];
    }
  }
}
</script>
