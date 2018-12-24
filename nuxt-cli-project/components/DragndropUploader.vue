<template>
  <div class="dragndrop-uploader-component">
    <div
      ref="dragndropAvatar"
      class="dropzone"/>
  </div>
</template>

<script>
import axios from 'axios'
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'

export default {
  name: 'DragndropUploader',
  model: {
    prop: 'picture'
  },
  props: {
    picture: {
      type: String,
      required: true
    }
  },
  data: () => ({
    myDropzone: null
  }),
  mounted() {
    this.initDropzone()
  },
  methods: {
    initDropzone() {
      this.myDropzone = new Dropzone(this.$refs.dragndropAvatar, {
        url: 'https://api.imgur.com/3/image',
        paramName: 'image',
        acceptedFiles: 'image/*',
        method: 'post',
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null,
          Authorization: 'Client-ID 3bef0b8892d4b04'
        },
        createImageThumbnails: true,
        success: (file, response) => {
          this.$emit('input', response.data.link)
        }
      })
    }
  }
}
</script>
