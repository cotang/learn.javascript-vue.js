<template>
  <div class="texteditor-component">
    <vue-editor 
      v-model="editingText" 
      @text-change="updateText"/>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

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
  mounted() {
    this.editingText = this.about
  },
  methods: {
    updateText() {
      this.$emit('updateAbout', this.editingText)
    }
  }
}
</script>
