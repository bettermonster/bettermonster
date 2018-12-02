<template>
  <div class="detail">
    <div class="bg" :style="{backgroundImage: 'url(' + img + ')'}">
      <div class="mint-search">
        <div class="cl">
          <span @click="goback" class="iconfont icon-xiangzuojiantou"></span>
          <p>歌单</p>
        </div>
      </div>
    </div>
    <ul>
      <router-link :to = "{name: 'musicstart', query: {id: item.id}}" tag="li" v-for="item in list" :key="item.id">
        <img :src="item.al.picUrl" alt="item.al.name">
        <p>{{ item.name }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Loadmore } from 'mint-ui'
Vue.use(Header, Loadmore)
export default {
  data () {
    return {
      title: '',
      list: [],
      img: '',
      allLoaded: false,
      loadTop: ''
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  mounted () {
    // console.log(this.$route.query.id)
    fetch(`http://localhost:3000/playlist/detail?id=${this.$route.query.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.list = data.playlist.tracks.slice(0, 100)
        console.log(this.list)
        this.title = data.playlist.name
        this.img = data.playlist.coverImgUrl
      })
  }
}
</script>

<style scoped lang="scss">
@import '@/lib/reset.scss';
.detail {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .bg {
    height: 3rem;
    width: auto;
    background-size: cover;
    .mint-search {
      @include rect(100%, 0.45rem);
      @include text-color(#fff);
      display: flex;
      flex-shrink: 0;
      font-size: 0.18rem;
      justify-content: center;
      align-items: center;
      letter-spacing: 0.05rem;
      font-weight: 500;
      position: relative;
      height: 3rem;
      .cl {
        position: absolute;
        height: 0.45rem;
        left: 0.1rem;
        top: 0.1rem;
        display: block;
        line-height: 0.45rem;
        text-align: center;
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-weight: 500;
        font-size: 0.2rem;
        p {
          width: 100%;
          text-align: center;
          padding-right: 0.05rem
        }
      }
    }
  }
  ul {
    overflow: auto;
    padding-left: 0.05rem;
    li {
      height: 0.8rem;
      display: flex;
      align-items: center;
      p {
        margin-left: 0.3rem;
        font-size: 0.18rem;
        color: #000;
      }
      img {
        height: 0.7rem;
        width: auto;
      }
    }
  }
}
</style>
