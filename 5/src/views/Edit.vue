<template>
  <div class="edit">
    <h1>Редактирование пользователя</h1>
    <div v-if="!user" class="alert alert-primary" role="alert">Загрузка...</div>
    <div v-else>
      <div class="d-flex justify-content-between my-2">
        <button type="button" class="btn btn-link" @click="prevUser">Предыдущий пользователь</button>
        <button type="button" class="btn btn-link" @click="nextUser">Следующий пользователь</button>
      </div>
      <user-item v-model="user"></user-item>
    </div>
    <div class="d-flex justify-content-between my-3">
      <button type="button" class="btn btn-secondary" @click="deleteUser">
        Удалить
      </button>
      <button type="button" class="btn btn-primary" @click="saveUser">
        Сохранить
      </button>
    </div>
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
  data: function(){
    return {
      user: null
    }
  },
  computed: {
    id () {
      return Number(this.$route.params.id)
    },
    url(){
      return 'http://localhost:3004/users/' + this.id
    }
  },
  watch: {
    '$route': 'loadUser',
  },
  mounted(){
    this.loadUser();
  },
  methods: {
    loadUser(){
      axios.get(this.url)
        .then(response => response.data)
        .then(response => (this.user = response))
        .catch(error => console.error(error))
    },
    saveUser(){
      this.$validator.validateAll();
      if (this.errors.any()){
        alert('alert')
        return;
      }

      axios.patch(this.url, this.user)
        .then(()=>{
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    },
    deleteUser(){
      axios.delete(this.url, this.user)
        .then(()=>{
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    },
    prevUser(){
      if (this.id > 0 ){
        this.$router.push('/edit/' + (this.id - 1));
      }
    },
    nextUser(){
      if (this.id < 10 ){
        this.$router.push('/edit/' + (this.id + 1));
      }
    }
  }
}
</script>

<style>
</style>
