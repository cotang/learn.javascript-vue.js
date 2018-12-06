<template>
  <div class="pagination-component">
  <p>Выбрана страница {{currentPage}}</p>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li :class="[currentPage==1 ? 'disabled' : '', 'page-item']">
        <a class="page-link" @click="choosePageNumber(currentPage-1)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li :class="[currentPage==page ? 'active' : '', 'page-item']" v-for="(page, i) in pagesArray" :key="i">
        <a class="page-link" @click="choosePageNumber(page)">{{page}}</a>
      </li>
      <li :class="[currentPage==pagesArray.length ? 'disabled' : '', 'page-item']">
        <a class="page-link" @click="choosePageNumber(currentPage+1)" aria-label="Next">
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
  data: () => ({
  }),
  computed: {
    pagesArray () {
      var pagesArrayComputed = Math.ceil(this.total / this.perPage)
      return Array(pagesArrayComputed).fill().map((e,i)=>i+1);
    }
  },
  watch: {
  },
  mounted(){
  },
  methods:{
    choosePageNumber: function(n) {
      this.$emit('updateCurrentpage', n)
    }
  }
}
</script>

<style>
</style>
