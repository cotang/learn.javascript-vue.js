<template>
  <div>
    <h1>Список пользователей</h1>
    <div
      v-if="!users.length"
      class="alert alert-primary"
      role="alert">Загрузка...</div>
    <div v-else>
      <users-per-page v-model.number="perPage" />
      <user-list :list="shownUsers"/>
      <pagination
        :per-page="perPage"
        :total="total"
        v-model.number="currentPage" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'
import Pagination from '@/components/Pagination.vue'
import SelectUsersPerPage from '@/components/SelectUsersPerPage.vue'

export default {
  name: 'Users',
  components: {
    'user-list': UserList,
    pagination: Pagination,
    'users-per-page': SelectUsersPerPage
  },
  asyncData() {
    axios
      .get('http://localhost:3004/users')
      .then(response => response.data)
      .then(response => {
        return { users: response }
      })
      .catch(error => console.error(error))
  },
  data: function() {
    return {
      users: [],
      perPage: 5,
      currentPage: 1
    }
  },
  computed: {
    total() {
      return Number(this.users.length)
    },
    shownUsers() {
      var min = this.perPage * (this.currentPage - 1)
      var max = this.perPage * this.currentPage
      return this.users.filter((user, i) => i >= min && i < max)
    }
  },
  watch: {
    perPage() {
      this.currentPage = 1
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => response.data)
        .then(response => (this.users = response))
        .catch(error => console.error(error))
    }
  }
}
</script>
