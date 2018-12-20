<template>
  <div class="datepicker-component">
    <input 
      ref="calendar" 
      :value="value" 
      type="text" 
      class="form-control">
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
