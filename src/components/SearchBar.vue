<template>
  <div class="search">
    <i class="fa fa-search search__icon"></i>
    <input
      type="text"
      placeholder="Search for photo"
      class="search__input"
      v-on:keyup.enter="searchPhoto"
    />
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    methods: {
      searchNow(event) {
        const textbox = event.target;
        this.searchValue = textbox.value;

        if (!this.searchValue) {
          return;
        }

        this.$router.push("/s/" + this.searchValue);

        textbox.value = "";
        this.searchValue = "";
      }
    }
  }
</script>

<style lang="scss">
  .search {
    width: 70%;
    margin: auto;
  
    &__icon {
      color: #8a8a8a;
      position: absolute;
      padding: 0.9rem;
      min-width: 2rem;
      padding-top: 1rem;
    }
  
    &__input {
      padding: 0.9rem;
      width: 70%;
      padding-left: 3rem;
      border: none;
      font-size: 1.1rem;
      border-radius: 5px;

      &:focus {
        outline-color: #a9adb1;
      }
    }
  }
</style>
