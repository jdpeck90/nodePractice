<template>
  <div id="app">
    <div class="page-header">
      <h1>Kanban Board</h1>
      <p class="lead">An example of a Kanban board, written in Vue.js</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
