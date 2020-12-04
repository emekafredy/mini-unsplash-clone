import axios from 'axios';

export default {
  methods: {
    getPhotos: function() {
      return axios
          .get(`https://api.unsplash.com/search/photos?query=${this.$route.params.slug || 'africa'}&client_id=${process.env.VUE_APP_CLIENT_ID}&per_page=8`)
          .then((response) => response.data)
    }
  },
  created: function() {
    this.getPhotos().then((data) => (this.photos = data.results));
  }
}
