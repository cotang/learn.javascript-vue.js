<template>
  <div class="userlist-component">
    <!-- <slot name="header">header inner slot</slot> -->
    <table class="table table-sm">
      <thead>
        <slot name="table-header">
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
        </slot>
      </thead>
      <tbody>
        <tr v-for="(user) in list" v-bind:key="user.id">
          <slot name="table-row" :item="user" :test="testChild">
            <td>
              <router-link :to="'/edit?id='+ user.id">{{user.id}}</router-link>
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
          </slot>
        </tr>
      </tbody>
    </table>
    <!-- <slot name="footer">footer inner slot</slot> -->
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
    testChild(){
      console.log('testChild')
    }
  }
}
</script>

<style>
</style>
