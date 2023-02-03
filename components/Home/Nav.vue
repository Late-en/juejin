<template>
  <div class="nav-view">
    <NuxtLink to="/1">
      1
    </NuxtLink>
    <NuxtLink to="/2">
      2
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'HomeNav'
}
</script>

<style lang="scss" scoped>
  .nav-view{
    height: 3.833rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    background-color: #fff;
  }
</style>
