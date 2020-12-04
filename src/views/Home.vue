<template>
  <div>
    <Header>
       <SearchBar />
    </Header>

    <PhotoGrid :photos="photos"/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import PhotoGrid from '@/components/PhotoGrid';
  import SearchBar from '@/components/SearchBar';

  import getPhotosAPI from '@/mixins/getPhotosAPI';

  export default {
    name: 'Search',
    components: {
      Header,
      PhotoGrid,
      SearchBar
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
