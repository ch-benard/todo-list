<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from "./components/Header";
import NavBar from './components/NavBar';
export default {
  name: "App",
  components: {
    // "header-top": Header,
    'nav-bar': NavBar
  },
};
</script>

<style>
</style>
