<template>
  <div class="userlist-component">
    <table class="table table-sm">
      <thead>
        <tr>
          <th></th>
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
      </thead>
      <tbody>
        <tr v-for="(user) in list" v-bind:key="user.id">
          <td>
            <router-link :to="'/edit/'+ user.id">{{user.id}}</router-link>
          </td>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName }}</td>
          <td>
            <a :href="user.picture"><img :src="user.picture" :alt="user.firstName+' '+user.lastName"></a>
          </td>
          <td>{{user.isActive }}</td>
          <td>{{user.accessLevel }}</td>
          <td>{{user.balance}}</td>
          <td>{{user.age }}</td>
          <td><div class="email">{{user.email}}</div></td>
          <td>{{user.phone}}</td>
          <td>{{user.company}}</td>
          <td>{{user.address}}</td>
          <td><div class="about">{{user.about}}</div></td>
          <td>{{user.registered}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
