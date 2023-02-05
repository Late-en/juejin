<template>
    <div class='navBar'>
      <nav-bar-item v-for="(item,index) of navBarList" :key="index" :navBarName='item'></nav-bar-item>
    </div>
</template>

<script>
import navBarItem from './navBarItem.vue'
export default {
  name: 'navBar',
  data  () {
    return {
      navBarList: ['稀土掘金', '首页', '沸点', '课程', '直播', '活动', '竞赛', '商城', 'APP', '插件', '年度报告', '输入框', '创作者中心', '会员', '消息提醒', '个人中心']
    }
  },
  components: { 
    navBarItem,
  },
}
</script>

<style lang="scss" scoped>
.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  // backdrop-filter: blur(0.5rem);
  width: 60%;
  height: 4rem;
  position: sticky;
  // position: relative;
  top: 0;
  left: 0;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  z-index: 1000;
  box-sizing: border-box;
}

</style>