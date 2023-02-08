<template>
  <div class="nav-item link-item">
    <a href="#">{{ headerItemName }}</a>
    <span :class="{'tablead':tableadText !== ''}">{{ tableadText }}</span>
  </div>
</template>

<script>
export default {
  name: 'MainHeaderItem',
  props: {
    headerItemName: {
      type: String,
      default: ''
    },
    tableadText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.link-item {
  position: relative;
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

.tablead{
  position: absolute;
  top: 5px;
  left: 7px;
  z-index: 9;
  white-space: nowrap;
  padding: 2px 7px;
  background-color: #ee502f;
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  transform: scale(.5);
  line-height: 18px;
  color: #fff;
}
</style>
