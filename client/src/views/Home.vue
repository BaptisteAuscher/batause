<template>
  <div class="home">
    <Terminal></Terminal>
  </div>
</template>

<script>
import Terminal from '@/components/Terminal';

export default {
  name: "Home",
  components: {
    Terminal
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 0;
  margin: 0;
  width: 60vw;
  margin: auto;
}
</style>
