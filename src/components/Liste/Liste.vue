<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header font-weight-bold">{{ titre }}</div>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="(tache, index) in this.listeTaches"
            v-bind:key="index"
          >
            {{ tache }}
            <!-- div class="btn-modale">X</div -->
            <button
              v-on:click="delItem(index)"
              type="button"
              class="btn btn-danger btn-suppr"
            >
              X
            </button>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Liste",
  data: function () {
    return {};
  },
  methods: {
    delItem: function (index) {
      this.listeTaches.splice(index, 1);
    },
  },
  props: ['listeTaches', 'titre']
};
</script>

<style scoped src="./Liste.css">
</style>