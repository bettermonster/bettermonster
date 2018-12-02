<template>
  <div class="musicstart">
    <div class="musicbg" :style="{backgroundImage: 'url(' + img + ')'}"></div>
    <mt-header :title="title">
      <div @click="goback" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="geci">
      <ul>
        <li v-for="(lists,index) in lrc" :key="index">
          <p>{{ lists.txt }}</p>
        </li>
      </ul>
    </div>
    <audio controls="controls" preload="" :src="music.url"></audio>
  </div>
</template>

<script>
import Lyric from 'Lyric-parser'
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.use(Header)
export default {
  data () {
    return {
      music: {},
      detail: {},
      img: '',
      title: '',
      lrc: []
    }
  },
  components: {
    scroll
  },
  created () {
    fetch(`http://localhost:3000/song/url?id=${this.$route.query.id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.data[0])
        this.music = data.data[0]
      })
    fetch(`http://localhost:3000/song/detail?ids=${this.$route.query.id}`)
      .then(res => res.json())
      .then(dat => {
        this.detail = dat.songs[0]
        // console.log(dat)
        this.img = dat.songs[0].al.picUrl
        this.title = dat.songs[0].name
      })
    fetch(`http://localhost:3000/lyric?id=${this.$route.query.id}`)
      .then(res => res.json())
      .then(datas => {
        // console.log(datas)
        if (datas.lrc) {
          this.lrc = datas.lrc.lyric
          this.lrc = new Lyric(this.lrc)
          this.lrc = this.lrc.lines
          console.log(this.lrc)
        } else {
          this.lrc = '该歌曲无歌词'
        }
      })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.container {
  height: 100%;
  width: 100%;
}
.musicbg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(9px);
  z-index: -1;
}
.musicstart {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .mint-header {
    height: 0.45rem;
    background: rgba(0, 0, 0, 0.4);
  }
  .geci {
    height: 4rem;
    overflow: auto;
  }
  ul {
    height: auto;
    width: 100%;
    li {
      height: 0.25rem;
      text-align: center;
    }
  }
  audio {
    margin-left: 10%;
    width: 80%;
    display: flex;
    align-items: flex-start
  }
}
</style>
