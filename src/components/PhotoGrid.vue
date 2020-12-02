<template>
  <div class="photo-grid__container">
    <PhotoCard :items="photos"> </PhotoCard>
  </div>
</template>

<script>
import axios from 'axios';
import PhotoCard from './PhotoCard';

export default {
  name: 'PhotoGrid',
  components: {
    PhotoCard
  },
  data () {
    return {
      photos: [],
      clientId: process.env.VUE_APP_CLIENT_ID,
      searchInput: 'africa'
    }
  },
  methods: {
    getPhotos() {
      axios
        .get(`https://api.unsplash.com/search/photos?query=${this.searchInput}&client_id=${this.clientId}&per_page=8`)
        .then(response => (this.photos = response.data.results))
    }
  },
  mounted () {
    this.getPhotos()
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
