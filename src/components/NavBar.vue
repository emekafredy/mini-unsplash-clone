<template>
  <nav class="navbar">
    <a href="/" class="navbar__brand-text">UNSPLASH CLONE</a>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="scss">
  .navbar {
    padding: 1rem;
    background-color: #fff;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,.1);
    width: 100%;
    z-index: 100;

    &__brand-text {
      color: #7d8083;
      font-size: 1rem;
      font-weight: bolder;
      margin-left: 1rem;
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        background-color: #fff;
        color: rgb(196, 190, 190);
        transition: 0.5s;
      }
    }
  }
</style>
