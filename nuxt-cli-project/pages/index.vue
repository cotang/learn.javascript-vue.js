<template>
  <div class="home">

    <div class="form-group">
      <label for="example1">Поле из Vuex - title</label>
      <input
        id="example1"
        :value="title"
        type="text"
        class="form-control"
        @input="updateTitle($event.target.value)">
    </div>

    <div class="form-group">
      <label for="example1">Поле из Vuex - main</label>
      <input
        id="example1"
        v-model="main"
        type="text"
        class="form-control">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
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
    updateTitle: function(val) {
      this.$store.commit('changeTitle', val)
    }
  }
}
</script>
