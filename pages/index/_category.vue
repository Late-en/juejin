<template>
  <div class="showArticle">
    <home-article-list />
  </div>
</template>

<script>

export default {
  asyncData (context) {
    // console.log(context.route.params.category)
  }
}
</script>

<style lang="scss" scoped>
// 设置文章展示框样式
.showArticle {
  flex: 3;
}
</style>
