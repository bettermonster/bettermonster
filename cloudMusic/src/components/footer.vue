<template>
  <footer class="footer">
    <ul>
      <router-link :to = "item.go" tag = "li" v-for = "(item, index) of list" :key = "index">
        <span :class="item.icon"></span>
        <p>{{ item.title }}</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: '发现音乐',
          icon: 'iconfont icon-music',
          go: '/home'
        },
        {
          title: '我的音乐',
          icon: 'iconfont icon-audio',
          go: '/mymusic'
        },
        {
          title: '搜索',
          icon: 'iconfont icon-pengyou',
          go: '/search'
        },
        {
          title: '账号',
          icon: 'iconfont icon-home',
          go: '/user'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.footer {
  @include background-color(#fff);
  @include text-color(#000);
  ul {
    @include flexbox();
    @include rect(100%,100%);
    li{
      @include flex();
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();
      font-weight: 500;
      &.router-link-active {
        @include text-color(red);
      }
      .iconfont {
        font-size: 0.22rem;
      }
      p{
        @include font-size(0.12rem);
      }
    }
  }
}
</style>
