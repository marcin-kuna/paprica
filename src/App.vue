<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

$ff-primary: "Roboto", sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $ff-primary;
}

.container {
  width: 90vw;
  max-width: 1208px;
  margin: 0 auto;
  position: relative;
}
</style>
