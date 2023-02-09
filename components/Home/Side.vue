<template>
  <div class="rightBox">
    <div class="pamphletAdvertisingSpace">
      广告位
    </div>
    <div class="authorlist">
      <header class="userHeader">
        🎖️作者榜
      </header>
      <div class="userList">
        <div class="item">
          <a href="" class="link">
            <image src="../../static/img/home/user1.jpg" alt="NAkano_May的头像" class="avatar1" loading="lazy" />
            <div class="userInfo">
              <a href="" class="userName">
                <span class="name" style="max-width: 128px;">
                  Nakano_May
                </span>
                <span class="rank">
                  <image src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png" alt="NAkano_May的头像" class="avatar2" />
                </span>
              </a>
              <div class="position">
                java工程师
              </div>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="" class="link">
            <image
              src="https://p3-passport.byteimg.com/img/user-avatar/91ac9fa11eade880762f4f76cdb2cba0~100x100.awebp"
              alt="NAkano_May的头像"
              class="avatar1"
            />
            <div class="userInfo">
              <a href="" class="username">
                <span class="name" style="max-width: 128px;">
                  Nakano_May
                </span>
                <span class="rank">
                  <image
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png"
                    alt="NAkano_May的头像"
                    class="avatar2"
                  />
                </span>
              </a>
              <div class="position">java工程师</div>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="" class="link">
            <image
              src="https://p3-passport.byteimg.com/img/user-avatar/91ac9fa11eade880762f4f76cdb2cba0~100x100.awebp"
              alt="NAkano_May的头像"
              class="avatar1"
            />
            <div class="userInfo">
              <a href="" class="username">
                <span class="name" style="max-width: 128px;">
                  Nakano_May
                </span>
                <span class="rank">
                  <image
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png"
                    alt="NAkano_May的头像"
                    class="avatar2"
                  />
                </span>
              </a>
              <div class="position">java工程师</div>
            </div>
          </a>
        </div>
        <a href="" class="item">
          <div class="more">
            <span class="bangdan">完整榜单</span>
            <i class="icon" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSide'
}
</script>

<style lang="scss" scoped>
.rightBox {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 20rem;
}
.authorlist {
  background-color: #fff;
  box-shadow: 0  1px 1px 0;
  border-radius: 2px;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
  margin-top: .75rem;
  .userHeader {
    padding: 1rem 1.3rem;
    border-bottom: 1px solid hsla(0, 0%, 59.2, .1);
    font-size: 1.16rem;
    line-height: 1.29;
    color: #333;
  }
  .userList .item{
    align-items: center;
    display: flex;
    flex-direction: column;
    .link{
      padding: 1rem 1.3rem;
      display: flex;
      align-items:center;
      line-height: 2rem;
      .avatar1{
        display: block;
        width: .2rem;
        height: .2rem;
        border-radius: 50%;
        margin-right: 6px;
        position: relative;
        overflow-x: chipset;
        overflow-y: chipset;
      }
      .userInfo{
        display: block;
        overflow: hidden;
        .userName{
          display: flex;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 3px;
          font-size: 1.16rem;
          font-weight: 400;
          color: #333;
          .name{
            display: inline-block;
            vertical-align: top;
          }
          .rank{
            display: inline-flex;
            align-items: center;
            margin-left: 0.33rem;
            vertical-align: middle;

            image {
                width: 35px;
                height: 16px;
              }
          }
        }
      }
    }

  }
  .more{
    color:rgb(0,127,255);
    text-align: center;
    height: 42.95px;
    width: 20rem;
    display: flex;
    border-top: 1px solid hsla(0, 0%, 59.2, .1);
    .bangdan{
      margin: auto;
    }
  }

}
</style>
