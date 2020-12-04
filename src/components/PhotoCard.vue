<template>
  <div class="photo-card">
    <div class="photo-card__container">
      <div
        class="photo-card__frame"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <div>
          <img
            class=""
            :src="photo.urls.regular"
            :alt="photo.alt_description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PhotoGrid',
    props: {
      photos: {
        type: Array,
        required: false
      }
    }
  }
</script>

<style lang="scss">
  .photo-card {
    display: flex;

    &__container {
      column-gap: 1.5rem;
      flex-flow: column wrap;
    }

    &__frame {
      margin-bottom: 1rem;

      img {
        width: 100%;
        border-radius: 3px;
      }
    }
  }

  @media only screen and (min-width: 900px) {
    .photo-card {
      &__container {
        columns: 3;
      }
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 899px) {
    .photo-card {
      &__container {
        columns: 2;
      }
    }
  }
</style>
