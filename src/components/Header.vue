<template>
  <div class="header">
    <SearchBar />
  </div>
</template>

<script>
  import SearchBar from './SearchBar.vue';

  export default {
    name: 'Header',
    components: {
      SearchBar
    }
  }
</script>

<style lang="scss">
  .header {
    background-color: #dde2e8;
    border-radius: 3px;
    padding: 8rem 0;
    margin: auto;
    text-align: center;
  }
</style>
