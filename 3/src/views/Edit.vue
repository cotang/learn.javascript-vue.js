<template>
  <div class="edit">
    <h1>Редактирование пользователя</h1>
    <user-item :person="defaultUser"></user-item>
  </div>
</template>

<script>
import axios from 'axios'
import UserItem from '@/components/UserItem.vue'

export default {
  name: 'Edit',
  components: {
    'user-item': UserItem
  },
  data: function(){
    return {
      defaultUser: {}
    }
  },
  computed: {
  },
  watch: {
  },
  mounted(){
    this.loadUser();
  },
  methods: {
    loadUser(){
      axios.get('http://localhost:3004/users/0')
        .then(response => response.data)
        .then(response => (this.defaultUser = response))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>
</style>
