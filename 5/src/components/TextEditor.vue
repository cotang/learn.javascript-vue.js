<template>
  <div class="texteditor-component">
    <vue-editor v-model="editingText" @text-change="updateText"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: 'TextEditor',
  components: {
    VueEditor
  },
  props: {
    about: {
      type: String,
      required: true
    }
  },
  data: () => ({
    editingText: ''
  }),
  computed: {
  },
  watch: {
  },
  mounted(){
    this.editingText = this.about;
  },
  beforeDestroy(){
  },
  methods:{
    updateText(){
      // console.log(this.editingText)
      this.$emit('updateAbout', this.editingText )
    }
  }
}
</script>

<style>
</style>
