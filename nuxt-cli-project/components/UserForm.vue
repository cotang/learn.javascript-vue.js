<template>
  <div class="userform-component">

    <div class="form-group">
      <label for="exampleInputName1">Имя</label>
      <input
        v-validate="'required'"
        id="exampleInputName1"
        :class="{'is-invalid' : errors.has('firstName') }"
        v-model="localUser.firstName"
        type="text"
        class="form-control"
        name="firstName">
      <span
        v-show="errors.has('firstName')"
        class="help-block text-danger">
        {{ errors.first('firstName') }}
      </span>
    </div>
    <div class="form-group">
      <label for="exampleInputLastName1">Фамилия</label>
      <input
        v-validate="'required'"
        id="exampleInputLastName1"
        :class="{'is-invalid' : errors.has('lastName') }"
        v-model="localUser.lastName"
        type="text"
        class="form-control"
        name="lastName">
      <span
        v-show="errors.has('lastName')"
        class="help-block text-danger">
        {{ errors.first('lastName') }}
      </span>
    </div>
    <div class="form-group">
      <label for="exampleInputPicture1">Изображение</label>
      <br>
      <img
        :src="localUser.picture"
        class="img-thumbnail">
      <input
        v-model="localUser.picture"
        type="text"
        class="form-control my-3">
        <!-- <dragndrop-uploader v-model="localUser.picture" /> -->
    </div>
    <div class="form-group">
      <p-check
        id="exampleCheck1"
        v-model="localUser.isActive"
        class="p-svg p-curve"
        color="success">
        <svg
          slot="extra"
          class="svg svg-icon"
          viewBox="0 0 20 20">
          <path
            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
            style="fill:white"/>
        </svg>
      </p-check>
      <label
        class="form-check-label"
        for="exampleCheck1">Активен</label>
    </div>
    <div class="form-group">
      <label for="exampleSelectAccessLevel1">Уровень доступа</label>
      <select
        id="exampleSelectAccessLevel1"
        v-model="localUser.accessLevel"
        class="form-control">
        <option
          v-for="(item) in accessLevelArray"
          :value="item"
          :key="item">{{ item }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputBalance1">Баланс</label>
      <input
        id="exampleInputBalance1"
        v-model="localUser.balance"
        type="text"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="exampleInputAge1">Возраст</label>
      <input
        id="exampleInputAge1"
        v-model.number="localUser.age"
        type="number"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input
        v-validate="'required|email'"
        id="exampleInputEmail1"
        :class="{'is-invalid' : errors.has('email') }"
        v-model="localUser.email"
        type="email"
        class="form-control"
        name="email" >
      <span
        v-show="errors.has('email')"
        class="help-block text-danger">
        {{ errors.first('email') }}
      </span>
    </div>
    <div class="form-group">
      <label for="exampleInputPhone1">Телефон</label>
      <input
        id="exampleInputPhone1"
        v-model="localUser.phone"
        type="text"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="exampleInputCompany1">Компания</label>
      <input
        id="exampleInputCompany1"
        v-model="localUser.company"
        type="text"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="exampleInputAddress1">Адрес</label>
      <input
        id="exampleInputAddress1"
        v-model="localUser.address"
        type="text"
        class="form-control">
    </div>
    <div class="form-group">
      <label for="exampleTextareaAbout1">О себе</label>
      <no-ssr placeholder="Loading Your Editor...">
        <text-editor
          :about="localUser.about"
          @updateAbout="synchronizeAbout" />
      </no-ssr>
    </div>
    <div class="form-group">
      <label for="exampleInputRegistered1">Зарегистрирован</label>
      <datepicker v-model="localUser.registered" />
    </div>
  </div>
</template>

<script>
import equal from 'deep-equal'
import Datepicker from '@/components/Datepicker.vue'
import TextEditor from '@/components/TextEditor.vue'
// import DragndropUploader from '@/components/DragndropUploader.vue'
import PrettyCheck from 'pretty-checkbox-vue/check'

export default {
  name: 'UserForm',
  inject: ['$validator'],
  components: {
    datepicker: Datepicker,
    'text-editor': TextEditor,
    // 'dragndrop-uploader': DragndropUploader,
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
        if (!equal(val, oldVal)) {
          this.assignUser()
        }
      }
    }
  },
  mounted() {
    this.assignUser()
  },
  methods: {
    assignUser() {
      this.localUser = Object.assign({}, this.user)
    },
    update() {
      this.$emit('input', Object.assign({}, this.localUser))
    },
    synchronizeAbout(text) {
      this.localUser.about = text
    }
  }
}
</script>
