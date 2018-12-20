<template>
  <div class="edit">
    <h1>Добавление пользователя</h1>
    <user-item v-model="user" />
    <div class="d-flex justify-content-between my-3">
      <button 
        type="button" 
        class="btn btn-secondary" 
        @click="gotoUsers">
        Список пользователей
      </button>
      <button 
        type="button" 
        class="btn btn-primary" 
        @click="saveUser">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

const initUser = {
  id: null,
  isActive: false,
  balance: '',
  picture: 'http://placehold.it/128x128',
  age: '',
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'Add',
  components: {
    'user-item': UserForm
  },
  data: () => ({
    user: initUser
  }),
  computed: {
    url() {
      return 'http://localhost:3004/users'
    }
  },
  methods: {
    saveUser() {
      axios
        .post(this.url, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    },
    gotoUsers() {
      this.$router.push('/users')
    }
  }
}
</script>
