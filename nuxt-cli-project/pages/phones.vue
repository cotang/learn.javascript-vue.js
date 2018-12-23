<template>
  <div>
    <h1>Телефонный справочник</h1>
    <div
      v-if="!users.length"
      class="alert alert-primary"
      role="alert">Загрузка...</div>
    <div v-else>
      <user-list :users="users">
        <tr slot="table-header">
          <th/>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Телефон</th>
        </tr>
        <template
          slot="table-row"
          slot-scope="{ item, test }">
          <td>
            <router-link :to="'/edit?id='+ item.id">{{ item.id }}</router-link>
          </td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.phone }}</td>
        </template>
      </user-list>
    </div>
  </div>
</template>

<script>
import axios from '@/axios.js'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Users',
  components: {
    'user-list': UserList
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
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch('loadUsers')
  }
}
</script>
