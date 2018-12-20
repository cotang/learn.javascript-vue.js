<template>
  <div class="edit">
    <h1>Добавление пользователя</h1>
    <user-item v-model="user"></user-item>
    <div class="text-right">
      <button type="button" class="btn btn-primary mb-3" @click="saveUser">
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
  name: 'Edit',
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
  watch: {},
  mounted() {},
  methods: {
    saveUser() {
      axios
        .post(this.url, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>
</style>
