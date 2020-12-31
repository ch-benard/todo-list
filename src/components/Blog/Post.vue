<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header font-weight-bold">{{ titre }} n° {{ post.id }} </div>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
      </div>
    </div>
    <router-link to="/blog" class="linkToPost"><div class="btn btn-primary mt-3">Retour au blog</div></router-link>   
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Post',
  data() {
    return {
      titre: 'Post',
      post: [],
      id: this.$route.params.id,
    }
  },
  mounted() {
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    .then(response => {
      this.post = response.data;
      console.log(this.post);
    })
  }
}
</script>

<style>

</style>templ