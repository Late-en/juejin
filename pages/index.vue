<template>
  <div class="home">
    <!-- 公共头组件 -->
    <MainHeader :class="{'hidden':isHidden, 'visable':!isHidden}" />
    <!-- home页主体部分 -->
    <div class="HomeBody">
      <!-- 导航栏 -->
      <HomeNav :class="{'hidden':isHidden, 'visable':!isHidden}" />
      <div class="HomeContainer">
        <!-- 文章列表 -->
        <NuxtChild />
        <!-- 边缘广告栏 -->
        <HomeSide />
      </div>
    </div>
  </div>
</template>

<script>
// 防抖函数
import { debounce } from '@/assets/js/utils'

export default {
  name: 'IndexPage',
  data () {
    return {
      isHidden: false
    }
  },
  mounted () {
    window.addEventListener('scroll', debounce(this.scrollHandler, 10))
  },
  methods: {
    scrollHandler () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 400) {
        this.isHidden = true
      } else {
        this.isHidden = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    font-size: 12px;

    .HomeContainer {
      position: relative;
      margin: 0 auto;
      width: 100%;
      max-width: 960px;
    }
  }

  .hidden {
    transition: all .2s;
    transform: translate3d(0,-5rem,0);
  }

  .visable{
    transition: all .2s;
    transform: translateZ(0);
  }
</style>
