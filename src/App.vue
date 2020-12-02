<template>
  <NavBar />
  <Header />
  <PhotoGrid />
</template>

<script>
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import PhotoGrid from './components/PhotoGrid';

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    PhotoGrid
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
