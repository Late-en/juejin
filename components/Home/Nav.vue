<template>
  <div class="nav-view">
    <nav class="article-nav">
      <NuxtLink v-for="(item,index) of ArticleNavList" :key="index" to="\1" class="nav-item">
        {{ item }}
      </NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  data () {
    return {
      ArticleNavList: ['综合', '关注', '后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读']
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-view {
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  background-color: #fff;

  .article-nav{
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;

    .nav-item:first-child {
      padding: 0 1rem 0 0;
    }

    .nav-item:hover {
      color: #007fff;
    }
  }
}
</style>
