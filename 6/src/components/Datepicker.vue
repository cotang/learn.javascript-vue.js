<template>
  <div class="datepicker-component">
    <input type="text" class="form-control" ref="calendar" :value="value">
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  computed: {},
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    this.fp = flatpickr(this.$refs.calendar, {
      dateFormat: 'd.m.Y',
      onChange: (selectedDates, dateStr) => {
        this.$emit('input', dateStr)
      }
    })
  },
  beforeDestroy() {
    this.fp.destroy()
  },
  methods: {
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    }
  }
}
</script>

<style>
</style>
