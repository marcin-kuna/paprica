<template>
  <div class="home">
    <h2>Click on "Czasopisma" to see view from the mockup (task 1)</h2>
    <h2>Click on cart button to see Cart Modal (task 1)</h2>
    <h2>Click on "Kontakt" to see view of the API (task 2)</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: calc(100vh - 90px);
  @include flex-center;
  flex-direction: column;
}
</style>
