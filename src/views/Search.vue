<template>
  <div>
    <Header>
      <h1> Search Results for {{ $route.params.slug }} </h1>
    </Header>

    <PhotoGrid :photos="photos"/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import PhotoGrid from '@/components/PhotoGrid';

  import getPhotosAPI from '@/mixins/getPhotosAPI';

  export default {
    name: 'Search',
    components: {
      Header,
      PhotoGrid
    },
    mixins: [getPhotosAPI],
    data () {
      return {
        photos: null,
      }
    }
  }
</script>

<style lang="scss">
  
</style>
