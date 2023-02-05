<template>
  <div class="main-header">
    <div class="container">
      <a href="/" class="logo">
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="" class="logo-img">
      </a>
      <nav class="header-nav">
        <ul class="nav-list">
          <ul class="main-nav-list">
            <li class="nav-item link-item active">
              <a href="#">首页</a>
            </li>
            <li class="nav-item link-item">
              <a href="#">沸点</a>
            </li>
            <li class="nav-item link-item">
              <a href="#">课程</a>
            </li>
            <li class="nav-item link-item">
              <a href="#">直播</a>
            </li>
            <li class="nav-item link-item">
              <a href="#">活动</a>
            </li>
            <li class="nav-item link-item">
              <a href="#">竞赛</a>
            </li>
            <li class="nav-item link-item">
              <a href="#">商城</a>
            </li>
            <li class="nav-item link-item">
              <a href="#">APP</a>
            </li>
            <li class="nav-item link-item">
              <a href="#">插件</a>
            </li>
            <li class="nav-item link-item">
              <a href="#" style="height: 40px;">
                <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb52d4a506e44aba88bc0f2e8a8b2b7~tplv-k3u1fbpfcp-zoom-1.image" alt="" style="max-width: 115px">
              </a>
            </li>
          </ul>
          <ul class="right-side-nav">
            2
          </ul>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
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

        .nav-list{
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          flex-direction: row;
          height: 100%;
          margin: 0;

          .nav-item{
            color: #86909c;;
            padding: 0 1rem;
            font-size: 1.167rem;
            margin: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            a{
              color: #515767;
            }

            &:hover{
              color: black;
            }
          }

          .link-item {
            padding: 0;
            height: 5rem;

            a{
              display: inline-block;
              height: 5rem;
              margin: 0 1rem;
              line-height: 5rem;
            }
          }

          .main-nav-list{
            display: flex;
            height: 100%;
          }
        }
      }
    }
  }
</style>
