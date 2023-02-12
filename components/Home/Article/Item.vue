<template>
  <div class="articleItem">
    <div class="relativeInf">
      <span class="author">author</span>
      <span class="date">2天前</span>
      <span class="lable">前端</span>
    </div>
    <div class="articleInf">
      <h4 class="title">
        我是文章标题
      </h4>
      <div class="content">
        这篇文章大概会招来一些居心叵测的人，但这可能是整个互联网技术社区从未有人分享过的真实情况。如果你觉得这篇文章可能对你的人生起到很积极的作用，请不要吝啬点赞和评论。
      </div>
    </div>
    <div class="interact">
      <div class="watched">
        <img src="~/static/img/home/眼睛.svg" alt=""><span>2450</span>
      </div>
      <div class="agree">
        <img src="~/static/img/home/点赞.svg" alt=""><span>50</span>
      </div>
      <div class="discuss">
        <img src="~/static/img/home/对话框.svg" alt=""><span>2</span>
      </div>
    </div>
    <div class="showImg">
      <img src="~/static/img/home/文章照片.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeArticleItem'
}
</script>

<style lang="scss" scoped>
// 设置互动框详细样式
@mixin interactYS {
    display: inline-block;
    height: 50%;
    flex: 1;
    vertical-align: center;
    font-size: 0.75rem;
    text-align: center;

    &:hover {
        color: $juejin-blue;
    }

    img {
        height: 100%;
        width: 1rem;
    }

    span {
        // height: 100%;
        width: 1.25rem;
        padding-left: 0.5rem;

    }
}

// 整个文章Item样式
.articleItem {
    height: 7rem;
    padding: 1rem;
    position: relative;

    &:hover {
        background-color: rgba(221, 221, 221, 0.205);
    }
}

.relativeInf {
    color: rgba(0, 0, 0, 0.753);
    font-size: 0.9rem;
}

// 设置作者样式
.author,
.lable {
    position: relative;
    padding-right: 1rem;

    &:hover {
        color: #0070f3;
    }
}

.date {
    position: relative;
    padding-right: 1rem;
}

.title {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

// 设置文章文字样式
.content {
    color: rgba(0, 0, 0, 0.541);
    font-size: 0.9rem;
    width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

// 设置作者名和标签之间分割线
.date,.author {
    &::after {
        content: '';
        height: 60%;
        width: 1px;
        background-color: #e2e1e1;
        position: absolute;
        right: 0.4rem;
        top: 0.7rem;
        transform: translate(50%, -50%);
    }
}

// 设置下划线样式
.articleItem::after {
    content: '';
    height: 1px;
    width: 95%;
    position: absolute;
    bottom: 0;
    background-color: #e2e1e1;
}

// 设置互动框样式
.interact {
    display: flex;
    height: 2rem;
    padding-top: 1rem;
    width: 30%;
}

// 设置眼睛样式
.watched {
    @include interactYS;
}

.agree {
    @include interactYS;

    &:hover {
        img {
            content: url('~/static/img/home/点赞hover.svg');
        }
    }
}

.discuss {
    @include interactYS;

    &:hover {
        img {
            content: url('~/static/img/home/对话框hover.svg');
        }
    }
}

// 设置文章图片样式
.showImg {
    position: absolute;
    top: 3rem;
    right: 1.5rem;

    img {
        height: 5rem;
        width: 8rem;
        border-radius: 5px;
    }
}
</style>
