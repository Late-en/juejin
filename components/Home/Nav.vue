<template>
  <div class="navView" :class="{'theme-night':$bus.isNight}">
    <nav class="articleNav">
      <a v-for="(item,index) of articleNavList" :key="index" class="navItem" @click="getArticleList(item.route)">
        {{ item.type }}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  data () {
    return {
      articleNavList: [
        { type: '综合', route: 'recommended' },
        { type: '关注', route: 'following' },
        { type: '后端', route: 'backend' },
        { type: '前端', route: 'frontend' },
        { type: 'Android', route: 'android' },
        { type: 'iOS', route: 'ios' },
        { type: '人工智能', route: 'ai' },
        { type: '开发工具', route: 'freebie' },
        { type: '代码人生', route: 'career' },
        { type: '阅读', route: 'article' }
      ]
      // articleType: 'recommended',
      // sort: ''
    }
  },
  mounted () {
    this.getArticleList('')
  },
  methods: {
    getArticleList (route) {
      this.$router.push({
        path: `/${route}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navView {
  position: fixed;
  top: 5rem;
  height: 3.833rem;
  width: 100%;
  z-index: 99;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  background-color: #fff;

  .articleNav{
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;

    .navItem:first-child {
      padding: 0 1rem 0 0;
    }

    .navItem:hover {
      color: #007fff;
    }
  }
}
</style>
