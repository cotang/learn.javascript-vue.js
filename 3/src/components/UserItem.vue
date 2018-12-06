<template>
  <div class="useritem-component">
    <div class="card mb-3" style="width: 30rem;">
      <div class="card-body">


        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputEmail3" v-model="person.firstName">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label">Last name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputEmail3" v-model="person.lastName">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputEmail3" v-model="person.email">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-3 col-form-label">Phone</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputPassword3" v-model="person.phone">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-3 col-form-label">Address</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputPassword3" v-model="person.address">
            </div>
          </div>
<!--           <div class="form-group row">
            <div class="col-sm-9">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </div> -->
        </form>

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
