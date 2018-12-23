<template>
  <div id="app">
    <div id="nav">

      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link
          class="navbar-brand"
          to="/users">{{ title }}</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarCollapse"
          class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <router-link
              tag="li"
              class="nav-item"
              to="/"
              exact>
              <a class="nav-link">{{ main }}</a>
            </router-link>
            <router-link
              tag="li"
              class="nav-item"
              to="/phones">
              <a class="nav-link">Телефонный справочник</a>
            </router-link>
            <router-link
              tag="li"
              class="nav-item"
              to="/users">
              <a class="nav-link">Список пользователя</a>
            </router-link>
            <router-link
              tag="li"
              class="nav-item"
              to="/add">
              <a class="nav-link">Добавление пользователя</a>
            </router-link>
          </ul>
        </div>
      </nav>

      <main
        role="main"
        class="container">
        <nuxt/>
      </main>
    </div>

  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    title() {
      return this.$store.state.navbarTitle
    },
    main() {
      return this.$store.state.navbarMain
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
table {
  font-size: 13px;
}
.about {
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100px;
}
.email {
  width: 100px;
  word-wrap: break-word;
}
</style>
