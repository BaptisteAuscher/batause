<template>
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
@import '@/style/__variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: $dark-grey;
}
</style>
