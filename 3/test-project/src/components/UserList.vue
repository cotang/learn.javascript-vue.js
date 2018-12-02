<template>
  <div class="userlist-component">
    <table class="table">
      <thead>
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>phone</th>
          <th>address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user) in list" v-bind:key="user.id">
          <td>{{user.firstName}}</td>
          <td>{{user.lastName }}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.address}}</td>
          <td><button type="button" class="btn btn-secondary" @click="chooseUser(user.id)">Edit</button></td>
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
    chooseUser: function(id) {
      this.$emit('choose', id)
    }
  }
}
</script>

<style>
</style>
