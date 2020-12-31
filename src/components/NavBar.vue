<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Test Vuejs</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="btn btn-secondary btn-nav" to="/" exact>Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="btn btn-secondary btn-nav" to="/todo">Liste de tâches</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="btn btn-secondary btn-nav" to="/blog">Blog</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.navbar {
  background: #f7f7f7 !important;
}
.navbar-brand {
  font-weight: bolder;
  font-family: Arial;
  font-size: 200% !important;
}
.btn-nav {
  margin: 3px;
}
.router-link-active {
  font-weight: bolder !important;
}
</style>