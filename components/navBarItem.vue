<template>
  <div class="navBarItem">
      {{navBarName}}
  </div>
</template>

<script>
export default {
  name: 'navBarItem',
  props:{
    navBarName:''
  }
}
</script>

<style lang="scss" scoped>
.navBarItem{
  padding-top: 1rem;
  padding-bottom: 1rem;
}
// 设置下划线样式
.navBarItem:hover {
  border-bottom: 2px solid #34a8eb;
}
</style>