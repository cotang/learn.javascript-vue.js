<template>
  <div id="app">
    <div id="nav">

      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">VUE CLI APP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" class="nav-item" to="/" exact>
              <a class="nav-link">Главная</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/users">
              <a class="nav-link">Список пользователя</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/edit">
              <a class="nav-link">Редактирование пользователя</a>
            </router-link>
          </ul>
        </div>
      </nav>

      <main role="main" class="container">
        <router-view/>
      </main>
    </div>

  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
table{
  font-size: 13px;
}
.about{
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100px;
}
.email{
  width: 100px;
  word-wrap: break-word;
}
</style>
