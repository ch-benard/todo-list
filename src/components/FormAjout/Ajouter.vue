<template>
  <div class="container mt-5">
    <form>
      <div class="form-group">
        <label for="action" class="font-weight-bold">Tâche à ajouter</label>
        <input v-model.lazy="formData.action" type="text" id="action" class="form-control">
      </div>
      <button class="btn btn-primary mt-2" v-on:click.prevent="dmdAjoutTache">Ajouter la tâche</button>
    </form>
  </div>
</template>

<script>
    export default {
        name: "Ajouter",
        data: function () {
            return {
                formData: {
                    action: ''
                }
            };
        },
        methods: {
            dmdAjoutTache: function () {
                this.$emit('dmdAjoutTache', this.formData.action);
                this.formData.action = '';
            }
        }
    };
</script>

<style>
</style>