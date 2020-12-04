<template>
  <div class="photo-grid__container">
    <PhotoCard :photos="photos"> </PhotoCard>
  </div>
</template>

<script>
  import PhotoCard from './PhotoCard';

  export default {
    name: 'PhotoGrid',
    components: {
      PhotoCard
    },
    props: {
      photos: {
        type: Array,
        required: false
      }
    }
  }
</script>

<style lang="scss">
  .photo-grid__container {
    width: 80%;
    margin: auto;
    margin-top: -2rem;
    margin-bottom: 3rem;
  }
</style>
