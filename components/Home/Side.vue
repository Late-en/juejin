<template>
  <div class="rightBox">
    <div class="pamphletAdvertisingSpace">
      <div class="banner sidebarBlock">
        广告位
      </div>
    </div>
    <div class="authorlist sidebarBlock">
      <header class="userHeader">
        🎖️作者榜
      </header>
      <div class="userList">
        <div class="item">
          <a href="" class="link">
            <img src="../../static/img/home/user1.jpg" alt="NAkano_May的头像" class="avatar1" loading="lazy">
            <div class="userInfo">
              <a href="" class="userName">
                <span class="name" style="max-width: 128px;">
                  Nakano_May
                </span>
                <span class="rank">
                  <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png" alt="NAkano_May的头像" class="avatar2">
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
            <img src="../../static/img/home/user1.jpg" alt="NAkano_May的头像" class="avatar1" loading="lazy">
            <div class="userInfo">
              <a href="" class="userName">
                <span class="name" style="max-width: 128px;">
                  Nakano_May
                </span>
                <span class="rank">
                  <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png" alt="NAkano_May的头像" class="avatar2">
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
            <img src="../../static/img/home/user1.jpg" alt="NAkano_May的头像" class="avatar1" loading="lazy">
            <div class="userInfo">
              <a href="" class="userName">
                <span class="name" style="max-width: 128px;">
                  Nakano_May
                </span>
                <span class="rank">
                  <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png" alt="NAkano_May的头像" class="avatar2">
                </span>
              </a>
              <div class="position">
                java工程师
              </div>
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
    // background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 20rem;
}

.sidebarBlock{
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}

.banner{
  position: relative;
  height: 200px;
  width: 240px;
  font-size: 0;
  cursor: pointer;
}

.userHeader {
  padding: 1rem 1.3rem;
  border-bottom: 1px solid hsla(0,0%,59.2%,.1);
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}
.userList .item{
  align-items: center;
  display: flex;
  flex-direction: column;
  .link{
    width: 17.4rem;
    padding: 1rem 1.3rem;
    display: flex;
    align-items:center;
    line-height: 2rem;
    .avatar1{
      flex: 0 0 auto;
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;
      margin-right: .5rem;
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

          img {
            width: 35px;
            height: 16px;
          }
        }
      }

      .position{
        color: #909090;
        font-size: 1rem;
        margin-bottom: 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
  border-top: 1px solid hsla(0,0%,59.2%,.1);
  .bangdan{
    margin: auto;
  }
}
</style>
