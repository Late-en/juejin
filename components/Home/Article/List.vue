<template>
  <div class="showArticle" :class="{'theme-night':$bus.isNight}">
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    <home-article-item />
    到底啦~
  </div>
</template>

<script>
export default {
  name: 'HomeArticleList'
}
</script>

<style lang='scss' scoped>
  .showArticle {
    border-radius: 2px;
    background-color: #fff;
  }
</style>
