<template>
  <div class="edit">
    <h1>Редактирование пользователя</h1>
    <div v-if="!user" class="alert alert-primary" role="alert">Загрузка...</div>
    <div v-else>
      <button type="button" class="btn btn-primary" @click="nextUser">
        nextUser
      </button>
      <user-item v-model="user"></user-item>
    </div>
    <button type="button" class="btn btn-primary" @click="saveUser">
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
      axios.patch(this.url, this.user)
        .then(()=>{
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    },
    nextUser(){
      this.$router.push('/edit/' + (this.id + 1));
      // console.log(this.id, this.user)
      // this.loadUser();
    }
  }
}
</script>

<style>
</style>
