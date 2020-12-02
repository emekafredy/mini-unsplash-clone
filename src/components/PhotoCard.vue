<template>
  <div class="photo-card">
    <div class="photo-card__container">
      <div
        class="photo-card__frame"
        v-for="(item, index) in items"
        :key="index"
      >
        <div>
          <img
            class=""
            :src="item.urls.regular"
            :alt="item.alt_description"
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
      items: []
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
