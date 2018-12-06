<template>
  <div class="users-per-page-component">
    <select class="custom-select" v-model="value" @input="changePerPageValue($event.target.value)">
      <option v-for="(opt) in perPageOptions" :value="opt" :key="opt">{{opt}}</option>
    </select>
    <p>Выбрано элементов на страницу {{value}}</p>
  </div>
</template>

<script>
export default {
  name: 'SelectUsersPerPage',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    perPageOptions: [1, 3, 5, 10]
  }),
  computed: {
  },
  watch: {
  },
  mounted(){
  },
  methods:{
    changePerPageValue(val){
      this.$emit('input', val )
    }
  }
}
</script>

<style>
</style>
