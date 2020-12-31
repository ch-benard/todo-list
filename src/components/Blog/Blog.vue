<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header font-weight-bold">{{ titre }}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="(art, index) in allArticles" v-bind:key="index">
          <!-- <div class="card m-2" v-for="(val, prop) in art" v-bind:key="val">
            <h3>{{ prop }}</h3> {{ val }}
          </div> -->
          <router-link v-bind:to="`/post/${art.id}`" class="linkToPost">
            {{ art.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Blog',
  data() {
    return {
      titre: 'Articles du blog',
      allArticles: []
    }
  },
  created() {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      for(const blogPost of response.data) {
        this.allArticles.push(blogPost);
      }
      // console.log(response);
    })
  }
}
</script>

<style scoped src="./../Liste/Liste.css">
  .router-link {
  }
  .linkToPost {
    color: #000;
    text-decoration: none;
  }
</style>