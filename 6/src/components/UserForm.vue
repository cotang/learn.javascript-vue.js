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
        :class="{'is-invalid' : errors.has('lastName') }"
        id="exampleInputLastName1"
        name="lastName"
        v-validate="'required'"
        v-model="localUser.lastName">
        <span class="help-block text-danger" v-show="errors.has('lastName')">
          {{errors.first('lastName')}}
        </span>
    </div>
    <div class="form-group">
      <label for="exampleInputPicture1">Изображение</label>
      <br>
      <img :src="localUser.picture" class="img-thumbnail">
      <input type="text" class="form-control my-3" v-model="localUser.picture">
      <!-- <avatar-uploader v-model="localUser.picture" /> -->
      <dragndrop-uploader v-model="localUser.picture" />
    </div>
    <div class="form-group">
      <p-check class="p-svg p-curve" color="success" v-model="localUser.isActive" id="exampleCheck1">
        <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
          <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="fill:white"></path>
        </svg>
      </p-check>
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
      <input
        type="email"
        class="form-control"
        :class="{'is-invalid' : errors.has('email') }"
        id="exampleInputEmail1"
        name="email"
        v-validate="'required|email'"
        v-model="localUser.email" >
        <span class="help-block text-danger" v-show="errors.has('email')">
          {{errors.first('email')}}
        </span>
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
import TextEditor from '@/components/TextEditor.vue'
import DragndropUploader from '@/components/DragndropUploader.vue'
import PrettyCheck from 'pretty-checkbox-vue/check'

export default {
  name: 'UserForm',
  inject: ['$validator'],
  components: {
    datepicker: Datepicker,
    'text-editor': TextEditor,
    'dragndrop-uploader': DragndropUploader,
    'p-check': PrettyCheck
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
  data: vm => ({
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
      handler: function(val, oldVal) {
        if (val.id != oldVal.id) {
          this.localUser = Object.assign({}, this.user)
        }
      }
    }
  },
  mounted() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    update() {
      this.$emit('input', Object.assign({}, this.localUser))
    },
    synchronizeAbout(text) {
      this.localUser.about = text
    }
  }
}
</script>

<style>
</style>
