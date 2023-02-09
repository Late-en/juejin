<template>
  <div class="rightBox">
    我是右侧小框
  </div>
</template>

<script>
export default {
  name: 'HomeSide'
}
</script>

<style lang="scss" scoped>
.rightBox {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  width: 20rem;
  z-index: 1;
}
</style>
