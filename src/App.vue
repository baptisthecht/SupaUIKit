<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('./style/reset.css');
#app {
  font-family: 'Outfit', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-image: url('./assets/Background.png');
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

</style>
