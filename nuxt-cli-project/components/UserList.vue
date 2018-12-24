<template>
  <div class="userlist-component">

    <users-per-page v-model.number="perPage" />

    <div class="usertable">
      <table class="table table-sm">
        <thead>
          <slot name="table-header">
            <tr>
              <th/>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Изображение</th>
              <th>Активен</th>
              <th>Уровень доступа</th>
              <th>Баланс</th>
              <th>Возраст</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Компания</th>
              <th>Адрес</th>
              <th>О себе</th>
              <th>Зарегистрирован</th>
            </tr>
          </slot>
        </thead>
        <tbody>
          <tr
            v-for="user in shownUsers"
            :key="user.id">
            <slot
              :item="user"
              name="table-row">
              <td>
                <router-link :to="'/edit?id='+ user.id">{{ user.id }}</router-link>
              </td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>
                <a :href="user.picture"><img
                  :src="user.picture"
                  :alt="user.firstName+' '+user.lastName"></a>
              </td>
              <td>{{ user.isActive }}</td>
              <td>{{ user.accessLevel }}</td>
              <td>{{ user.balance }}</td>
              <td>{{ user.age }}</td>
              <td><div class="email">{{ user.email }}</div></td>
              <td>{{ user.phone }}</td>
              <td>{{ user.company }}</td>
              <td>{{ user.address }}</td>
              <td><div class="about">{{ user.about }}</div></td>
              <td>{{ user.registered }}</td>
            </slot>
          </tr>
        </tbody>
      </table>
    </div>

    <pagination
      :per-page="perPage"
      :total="total"
      v-model.number="currentPage" />

  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import SelectUsersPerPage from '@/components/SelectUsersPerPage.vue'

export default {
  name: 'UserList',
  components: {
    pagination: Pagination,
    'users-per-page': SelectUsersPerPage
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
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
  }
}
</script>
