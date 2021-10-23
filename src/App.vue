<template>
  <html>
    <head>
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    </head>
    <div id="app">
      <router-view></router-view>
    </div>
  </html>
</template>

<script>
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'

  export default {
  name: 'App',
  data() {
    return {};
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
