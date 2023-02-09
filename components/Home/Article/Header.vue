<template>
  <div class="listHeader">
    <nav class="listNav">
      <ul class="navList">
        <li class="navItem">
          <a href="#">推荐</a>
        </li>
        <li class="navItem">
          <a href="#">推荐</a>
        </li>
        <li class="navItem">
          <a href="#">推荐</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeArticleNav'
}
</script>

  <style lang="scss" scoped>
  .listHeader{
      padding: 1.3rem 1rem;
      border-bottom: 1px solid hsla(0,0%,59.2%,.1);
      .listNav{
          display: flex;
          justify-content: flex-start!important;
          .navList{
              align-items: center;
              line-height: 1;
              display: flex;
              justify-content: space-between;
              .navItem{
                height: 1rem;
                font-size: 1.17rem;
                padding: 0 1.2rem;

                &:nth-child(-n+2){
                  border-right: 1px solid hsla(0,0%,59.2%,.2);
                }
              }
          }
      }
  }
  </style>
