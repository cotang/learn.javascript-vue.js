<template>
  <div class="useritem-component">
    <div class="card mb-3" style="width: 30rem;">
      <div class="card-body">
        <h5 class="card-title"><span class="d-inline-block w-50">Name</span><input class="form-control d-inline-block w-50" type="text" v-model="person.firstName"> </h5>
        <p class="card-text"><span class="d-inline-block w-50">Username</span><input class="form-control d-inline-block w-50" type="text" v-model="person.lastName"></p>
        <p class="card-text"><span class="d-inline-block w-50">Email</span><input class="form-control d-inline-block w-50" type="text" v-model="person.email"></p>
        <p class="card-text"><span class="d-inline-block w-50">Phone</span><input class="form-control d-inline-block w-50" type="text" v-model="person.phone"></p>
        <p class="card-text"><span class="d-inline-block w-50">Website</span><input class="form-control d-inline-block w-50" type="text" v-model="person.address"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    person: {
      type: Object
    },
  }
}
</script>

<style>
</style>
