<template>
  <div class="users-per-page-component">
    <select 
      :value="value" 
      class="custom-select" 
      @input="changePerPageValue($event.target.value)">
      <option 
        v-for="(opt) in perPageOptions" 
        :value="opt" 
        :key="opt">{{ opt }}</option>
    </select>
    <p>Выбрано элементов на страницу {{ value }}</p>
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
  methods: {
    changePerPageValue(val) {
      this.$emit('input', Number(val))
    }
  }
}
</script>
