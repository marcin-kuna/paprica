<template>
  <div class="home">
    <h2>Click on "Czasopisma" (Header/Nav) to see view from the mockup</h2>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: calc(100vh - 90px);
  @include flex-center;
}
</style>
