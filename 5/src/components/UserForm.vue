<template>
  <div class="userform-component">

    <div class="form-group">
      <label for="exampleInputName1">Имя</label>
      <input
        type="text"
        class="form-control"
        :class="{'is-invalid' : errors.has('firstName') }"
        id="exampleInputName1"
        name="firstName"
        v-validate="'required'"
        v-model="localUser.firstName">
        <span class="help-block text-danger" v-show="errors.has('firstName')">
          {{errors.first('firstName')}}
        </span>
    </div>
    <div class="form-group">
      <label for="exampleInputLastName1">Фамилия</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputLastName1"
        name="lastName"
        v-model="localUser.lastName">
    </div>
    <div class="form-group">
      <label for="exampleInputPicture1">Изображение</label>
      <br>
      <img :src="localUser.picture" class="img-thumbnail">
      <input type="text" class="form-control" v-model="localUser.picture">
      <avatar-uploader v-model="localUser.picture" />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="localUser.isActive">
      <label class="form-check-label" for="exampleCheck1">Активен</label>
    </div>
    <div class="form-group">
      <label for="exampleSelectAccessLevel1">Уровень доступа</label>
      <select class="form-control" id="exampleSelectAccessLevel1" v-model="localUser.accessLevel">
        <option v-for="(item) in accessLevelArray" :value="item" :key="item">{{item}}</option>
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
      <text-editor :about="localUser.about" @updateAbout="synchronizeAbout"></text-editor>
    </div>
    <div class="form-group">
      <label for="exampleInputRegistered1">Зарегистрирован</label>
      <datepicker v-model="localUser.registered" />
    </div>
  </div>
</template>

<script>
import Datepicker from '@/components/Datepicker.vue'
import AvatarUploader from '@/components/AvatarUploader.vue'
import TextEditor from '@/components/TextEditor.vue'

export default {
  name: 'UserForm',
  inject: ['$validator'],
  components: {
    'datepicker': Datepicker,
    'avatar-uploader': AvatarUploader,
    'text-editor': TextEditor,
  },
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
    localUser: vm.user,
    accessLevelArray: ['user', 'guest', 'admin']
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'update'
    },
    user: {
      deep: true,
      handler: function (val, oldVal) {
        if (val.id != oldVal.id){
          this.localUser = Object.assign({}, this.user)
        }
      }
    },
  },
  mounted(){
    this.localUser = Object.assign({}, this.user)
  },
  methods:{
    update(){
      this.$emit('input', Object.assign({}, this.localUser) )
    },
    synchronizeAbout(text){
      this.localUser.about = text;
    }
  }
}
</script>

<style>
</style>
