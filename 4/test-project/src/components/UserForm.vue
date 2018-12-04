<template>
  <div class="userform-component">

    <div class="form-group">
      <label for="exampleInputName1">Имя</label>
      <input type="text" class="form-control" id="exampleInputName1" v-model="localUser.firstName">
    </div>
    <div class="form-group">
      <label for="exampleInputLastName1">Фамилия</label>
      <input type="text" class="form-control" id="exampleInputLastName1" v-model="localUser.lastName">
    </div>
    <div class="form-group">
      <label for="exampleInputPicture1">Ссылка на изображение</label>
      <input type="text" class="form-control" id="exampleInputPicture1" v-model="localUser.picture">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="localUser.isActive">
      <label class="form-check-label" for="exampleCheck1">Активен</label>
    </div>
    <div class="form-group">
      <label for="exampleSelectAccessLevel1">Уровень доступа</label>
      <select class="form-control" id="exampleSelectAccessLevel1" v-model="localUser.accessLevel">
        <option>user</option>
        <option>guest</option>
        <option>admin</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputBalance1">Баланс</label>
      <input type="text" class="form-control" id="exampleInputBalance1" v-model="localUser.balance">
    </div>
    <div class="form-group">
      <label for="exampleInputAge1">Возраст</label>
      <input type="number" class="form-control" id="exampleInputAge1" v-model="localUser.age">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" v-model="localUser.email">
    </div>
    <div class="form-group">
      <label for="exampleInputPhone1">Телефон</label>
      <input type="text" class="form-control" id="exampleInputPhone1" v-model="localUser.phone">
    </div>
    <div class="form-group">
      <label for="exampleInputCompany1">Компания</label>
      <input type="text" class="form-control" id="exampleInputCompany1" v-model="localUser.company">
    </div>
    <div class="form-group">
      <label for="exampleInputAddress1">Адрес</label>
      <input type="text" class="form-control" id="exampleInputAddress1" v-model="localUser.address">
    </div>
    <div class="form-group">
      <label for="exampleTextareaAbout1">О себе</label>
      <textarea class="form-control" id="exampleTextareaAbout1" rows="5" v-model="localUser.about"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleInputRegistered1">Зарегистрирован</label>
      <input type="text" class="form-control" id="exampleInputRegistered1" v-model="localUser.registered">
    </div>

<!--     <pre>{{localUser}}</pre>
    <hr>
    <pre>{{user}}</pre> -->
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: (vm) => ({
    localUser: vm.user
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'update'
    }
  },
  mounted(){
    this.localUser = Object.assign({}, this.user)
  },
  methods:{
    update(){
      this.$emit('input', Object.assign({}, this.localUser) )
    }
  }
}
</script>

<style>
</style>
