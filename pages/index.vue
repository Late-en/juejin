<template>
  <div class="home">
    <!-- 公共头组件 -->
    <MainHeader />
    <!-- home页主体部分 -->
    <div class="HomeBody">
      <!-- 导航栏 -->
      <HomeNav />
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
export default {
  name: 'IndexPage'
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
</style>
