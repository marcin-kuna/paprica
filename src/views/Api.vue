<template>
  <div class="api">
    <router-link class="api__link" to="/api/posts">List of posts</router-link>
    <router-link class="api__link" to="/api/create-post"
      >Add new post</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Api",
};
</script>

<style lang="scss" scoped>
.api {
  width: 100vw;
  height: calc(100vh - 90px);
  @include flex-center;

  &__link {
    width: 300px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 20px;
    margin: 10px;
    font-size: 30px;
    font-weight: bold;
    color: $color-brand-primary;
    border: 1px solid $color-brand-primary;
    text-align: center;
    transition: $transition;

    &:hover {
      color: $color-brand-secondary;
      border-color: $color-brand-secondary;
    }
  }
}
</style>
