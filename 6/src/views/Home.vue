<template>
  <div class="home">

    <div class="form-group">
      <label for="example1">Поле из Vuex - title</label>
      <input
        type="text"
        :value="title"
        @input="updateTitle($event.target.value)"
        class="form-control"
        id="example1">
    </div>

    <div class="form-group">
      <label for="example1">Поле из Vuex - main</label>
      <input
        type="text"
        v-model="main"
        class="form-control"
        id="example1">
    </div>


  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    title() {
      return this.$store.state.navbarTitle
    },
    main: {
      get() {
        return this.$store.state.navbarMain
      },
      set(val) {
        this.$store.commit('changeNavMain', val)
      }
    }
  },
  methods: {
    updateTitle: function(val){
      this.$store.commit('changeTitle', val)
    }
  }
}
</script>
