<template>
  <div class="showArticle">
      <article-item></article-item>
      <article-item></article-item>
      <article-item></article-item>
      <article-item></article-item>
      到底啦~
  </div>
</template>

<script>
import articleItem from './articleItem.vue'
export default {
  name: 'showArticle',
  components: { 
      articleItem,
    },
}
</script>

<style lang='scss' scoped>
  .showArticle {
      height: 60rem;
      width: 40rem;
      margin-left: auto;
      margin-top: 1rem;
      margin-right: 1.5rem;

      background-color: #fff;
  }
</style>