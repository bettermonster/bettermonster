<template>
  <div class="box">
    <div class="headpic" :style="{backgroundImage: 'url(' + users.backgroundUrl + ')'}">
      <div class="shadow">
        <div class="my-header">
          <span @click="goback" class="iconfont icon-xiangzuojiantou"></span>
          我的歌单
        </div>
        <div class="myheaderpic">
          <div class="changepic">
            <a href="javascript:;"><img :src="users.backgroundUrl" alt=""></a>
          </div>
          <p> <i>{{users.nickname}}</i> <span>level:{{all.level}}</span></p>
        </div>
      </div>
    </div>
    <div class="mylike">
      <ul>
        <router-link tag="li" :to="{name:'detail', query: {id: list.id}}" v-for="list in gedan" :key="list.id">
          <img :src="list.coverImgUrl" alt="">
          <p>
            <strong>{{list.name}}</strong>
            <span>{{list.trackCount}}首</span>
          </p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: {},
      all: {},
      gedan: []
    }
  },
  mounted () {
    const uid = localStorage.getItem('userId')
    fetch(`http://localhost:3000/user/detail?uid=${uid}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.users = data.profile
        this.all = data
      })
    fetch(`http://localhost:3000/user/playlist?uid=${uid}`)
      .then(res => res.json())
      .then(dat => {
        console.log(dat)
        this.gedan = dat.playlist
      })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.headpic {
  height: 2.7rem;
  width: 100%;
  .shadow {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5)
  }
  .my-header {
    position: relative;
    height: 0.45rem;
    width: 100%;
    text-align: center;
    line-height: 0.45rem;
    color: #fff;
    span {
      position: absolute;
      top: 0rem;
      left: 0rem;
      width: 0.4rem;
      height: 0.45rem;
      display: block;
    }
  }
  .myheaderpic {
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    p {
      height: 0.2rem;
      color: #fff;
      font-size: 0.16rem;
      text-align: center;
      margin-left: 0.1rem;
      margin-top: 0.1rem;
      display: flex;
      i {
        line-height: 0.16rem;
        height: 0.16rem;
      }
      span {
        margin-left: 0.05rem;
        border: 0.01rem solid #fff;
        border-radius: 0.8rem;
        height: 0.16rem;
        color: #fff;
        font-size: 0.10rem;
        line-height: 0.16rem;
        text-align: center;
        padding: 0 0.02rem;
      }
    }
    .changepic {
      margin-left: 0.1rem;
      height: 1.1rem;
      width: 1.1rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 1.1rem;
        width: 1.1rem;
      }
    }
  }
}
.mylike {
  width: 100%;
  height: 100%;
  overflow: auto;
  ul {
    li {
      height: 0.8rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      p {
        margin-left: 0.15rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      }
      img {
        height: 0.76rem;
        width: 0.76rem;
      }
    }
  }
}
</style>
