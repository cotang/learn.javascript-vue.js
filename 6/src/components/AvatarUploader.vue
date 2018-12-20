<template>
  <div class="avatar-uploader-component pt-3">
    <input type="file" ref="avatar" class="d-none" @change="upload">
    <button type="button" class="btn btn-primary" @click="uploadImage">Загрузить изображение</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AvatarUploader',
  model: {
    prop: 'picture'
  },
  props: {
    picture: {
      type: String,
      required: true
    }
  },
  data: () => ({}),
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    uploadImage() {
      this.$refs.avatar.click()
    },
    upload() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.avatar.files[0])
      // Добавляем ключ от IMGUR
      // https://api.imgur.com/oauth2/addclient
      const config = {
        headers: {
          Authorization: 'Client-ID 3bef0b8892d4b04'
        }
      }
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.$emit('input', response.data.link)
          this.$refs.avatar.value = ''
        })
    }
  }
}
</script>

<style>
</style>
