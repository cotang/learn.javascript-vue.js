<template>
  <div class="edit">
    <h1>Добавление пользователя</h1>
    <user-item v-model="user"></user-item>
    <button type="button" class="btn btn-primary mb-3" @click="saveUser">
      Сохранить
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'Edit',
  components: {
    'user-item': UserForm
  },
  data: () => ({
    user: {}
  }),
  computed: {
    url(){
      return 'http://localhost:3004/users'
    }
  },
  watch: {
  },
  mounted(){
  },
  methods: {
    saveUser(){
      axios.post(this.url, this.user)
        .then(()=>{
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>
</style>
