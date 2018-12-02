<template>
  <header class="header">
    <div class="mint-search">网易云音乐</div>
    <div class="mint-navbar">
      <!-- <mt-navbar v-model="selected">
        <mt-tab-item id="tab-container1">音乐</mt-tab-item>
        <mt-tab-item id="tab-container2">视频</mt-tab-item>
        <mt-tab-item id="tab-container3">电台</mt-tab-item>
      </mt-navbar> -->
      <div class="mint-tab-item">音乐</div>
      <div class="mint-tab-item">视频</div>
      <div class="mint-tab-item">电台</div>
      <!-- <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tab-container1">
          <my-index></my-index>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <my-video></my-video>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <my-radio></my-radio>
        </mt-tab-container-item>
      </mt-tab-container> -->
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem, Search, Tabbar } from 'mint-ui'
Vue.use(Navbar, TabItem, Search, Tabbar)
export default {
  props: ['value'],
  data () {
    return {
      selected: 'tab-container1'
    }
  },
  // components: {
  //   'my-index': () => import('@/page/home'),
  //   'my-video': () => import('@/page/video'),
  //   'my-radio': () => import('@/page/radio')
  // },
  methods: {
    // change () {
    //   var reset = document.querySelector('.mint-navbar')
    //   reset.firstElementChild.setAttribute('class', 'mint-tab-item is-selected')
    //   // var res = document.querySelector('.mint-tab-item is-selected')
    //   reset.onclick = function (evt) {
    //     document.querySelector('.mint-tab-item').setAttribute('class', 'mint-tab-item')
    //     if (evt.target.getAttribute('class') === 'mint-tab-item') {
    //       evt.target.setAttribute('class', 'mint-tab-item is-selected')
    //       // console.log(evt.target)
    //     }
    //   }
    // }
  },
  mounted: function () {
    // this.change()
    var reset = document.querySelector('.mint-navbar')
    var music = reset.firstElementChild
    var video = music.nextElementSibling
    var radio = reset.lastElementChild
    music.onclick = () => {
      this.$router.push('/home')
    }
    video.onclick = () => {
      this.$router.push('/video')
    }
    radio.onclick = () => {
      this.$router.push('/radio')
    }
  }
}
</script>

<style lang='scss'>
@import '@/lib/reset.scss';
.header {
  .mint-search {
      @include rect(100%, 0.45rem);
      @include background-color(#d43c33);
      @include text-color(#fff);
      display: flex;
      flex-shrink: 0;
      font-size: 0.18rem;
      justify-content: center;
      align-items: center;
      letter-spacing: 0.05rem;
      font-weight: 500;
    }
  .mint-navbar {
    @include border(0 0 0.01rem 0, #ccc, solid);
    .mint-tab-item {
      @include text-color(#d33a31);
      @include font-size(0.16rem);
    }
  }
  .mint-tab-item:hover {
    @include border(0 0 0.04rem 0, #d33a31, solid);
  }
}
</style>
