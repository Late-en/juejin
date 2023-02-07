<template>
  <div class="MainContainer">
    <div class="showArticle">
      <show-article></show-article>
    </div>
    <div class="rightBox">我是右侧小框</div>
  </div>

</template>

<script>
import navBar from './navBar.vue'
import showArticle from './showArticle.vue'

export default {
  name: 'MainContainer',
  components: {
    navBar,
    showArticle
  }
}
</script>

<style lang="scss" scoped>
.MainContainer {
  display: flex;
  width: 80%;
  padding: auto;
}

// 设置文章展示框样式
.showArticle {
  flex: 3;
}
// 设置右侧盒子样式
.rightBox {
  flex: 1;
  background-color: #fff;
  width: 5rem;
  margin-left: auto;
  margin-top: 1rem;
  margin-right: 1.5rem;
}
</style>
