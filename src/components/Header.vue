<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Header',
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
