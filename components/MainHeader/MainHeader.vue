<template>
  <div class="main-header">
    <div class="container">
      <a href="/" class="logo">
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="" class="logo-img">
      </a>
      <nav class="header-nav">
        <div class="main-nav-list">
          <ul class="nav-list">
            <MainHeaderItem v-for="(item,index) of headerItemList" :key="index" :header-item-name="item" />
            <!-- <li class="nav-item link-item">
              <a href="#" style="height: 40px;">
                <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb52d4a506e44aba88bc0f2e8a8b2b7~tplv-k3u1fbpfcp-zoom-1.image" alt="" style="max-width: 115px">
              </a>
            </li> -->
          </ul>
          <ul></ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      headerItemList: ['首页', '沸点', '课程', '直播', '活动', '竞赛', '商城', 'APP', '插件']
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-header{
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;

    .container{
      margin: auto;
      height: 100%;
      max-width: 1440px;
      display: flex;
      align-items: center;

      .logo{
        margin-right: 1rem;
        margin-left: 24px;
        display: inline-block;
        height: 22px;
        width: auto;

        .logo-img{
          display: block;
          width: 107px;
          height: 22px;
        }
      }

      .header-nav{
        height: 100%;
        flex: 1 0 auto;

        .main-nav-list{
          display: flex;
          height: 100%;
        }

        .nav-list{
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          flex-direction: row;
          height: 100%;
          margin: 0;
        }
      }
    }
  }
</style>
