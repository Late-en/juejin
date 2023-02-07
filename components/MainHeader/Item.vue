<template>
  <div class="nav-item link-item">
    <a href="#">{{ HeaderItemName }}</a>
  </div>
</template>

<script>
export default {
  name: 'MainHeaderItem',
  props: {
    HeaderItemName: ''
  }
}
</script>

<style lang="scss" scoped>
.link-item {
  padding: 0;
  height: 5rem;

  a {
    display: inline-block;
    height: 5rem;
    margin: 0 1rem;
    line-height: 5rem;
  }

  &:hover{
    border-bottom: 2px solid #34a8eb;
  }
}
</style>