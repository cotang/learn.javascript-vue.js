<template>
  <div class="pagination-component">
    <p>Выбрана страница {{ currentPage }}</p>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li :class="[currentPage==1 ? 'disabled' : '', 'page-item']">
          <a 
            class="page-link" 
            aria-label="Previous" 
            @click="choosePageNumber(currentPage-1)">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li 
          v-for="page in pagesArray" 
          :class="[currentPage==page ? 'active' : '', 'page-item']" 
          :key="page">
          <a 
            class="page-link" 
            @click="choosePageNumber(page)">{{ page }}</a>
        </li>
        <li :class="[currentPage==pagesArray.length ? 'disabled' : '', 'page-item']">
          <a 
            class="page-link" 
            aria-label="Next" 
            @click="choosePageNumber(currentPage+1)">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Pagination',
  model: {
    prop: 'currentPage'
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    pagesArray() {
      var pagesArrayComputed = Math.ceil(this.total / this.perPage)
      return Array(pagesArrayComputed)
        .fill()
        .map((e, i) => i + 1)
    }
  },
  methods: {
    choosePageNumber: function(n) {
      this.$emit('input', n)
    }
  }
}
</script>
