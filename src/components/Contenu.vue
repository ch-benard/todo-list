<template>
  <div>
    <formAjout v-on:dmdAjoutTache="ajouterTache($event)"></formAjout>
    <liste v-bind:listeTaches="listeTaches" v-bind:titre="titre"></liste>
  </div>
</template>

<script>
import Liste from './Liste/Liste';
import Ajouter from './FormAjout/Ajouter';
export default {
  name: "Contenu",
  data: function () {
    return {
      titre: "Liste des tâches à réaliser",
      listeTaches: [
        "Vuejs",
        "Express",
        "Nodejs",
        "Typescript",
        "Sequelize",
        "Typeorm",
      ],
    };
  },
  components: {
      liste: Liste,
      formAjout: Ajouter
  },
  methods: {
    ajouterTache: function(tache) {
      this.listeTaches.push(tache);
    }
  },
};
</script>

<style>
</style>