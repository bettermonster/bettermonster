<template>
  <div class="cont">
    <div class="red">
      <div class="aloneHave">
        <h2>
          <p class="classify-title-bg"></p>
          <p class="classify-ttitle-content">推荐MV</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAXVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5BxTwAAAAHnRSTlMA8DLSZRINFdfLbAnFvwe6NQW1gVLqk3X0rCzhWkSkuBJrAAABqElEQVR42u3cS27DMAxFUbZO7DpJm7b+5cv9L7MOOjHkSTJ7JO7ZwQVEQBAgGgAAAAQ1U9fdLb7RH6pvC+7s/96Cl0zuKUq27jlKbr4sebewOk9S0nmSkt6TlOwHn2WY+N6zlOwSl0SdE0r0UKKHEj2U6KFEDyV6KNFDiZ48JRtK5FCihxI9lOihRA8leijRQ4keSvRQoocSPZTooUQPJXoo0UOJHkr0UKKHEj2U6KFEDyV6KNFDiR5K9GQuuVhMq5IhasnOS73FtPHCqbGYei90FtRYhBwsqHsRcrWgpiKkspi2QxEyWkj71gsx/5M3q46zRdRUXmhrC6j58EJFx/PooCMEOrTQoSVvR5Z7CR0voIOOEOjQQocWOrRss3Qkeb+iQwsdWtYdhywdewuIDi10aKFDCx1a6NBChxY6tNChZd3xmaXjywKiQwsdWujQQocWOrTQoYUOLXRoWXccs3T8WEB0aKFDS52lo/XCr4V0TNJxS9JhxxTzMRuSdNgpxbmatUk6rEvSYfU1R4fZZQi9D2ChGR8DX0Xdj7NU91PMNRMAAAB41R9lfEx7DZ+dqQAAAABJRU5ErkJggg==" alt="" class="next-img">
        </h2>
        <ul>
          <router-link :to="{name: 'mvstart', query: {id: lists.id}}" tag="li" v-for="lists in aloneHave" :key="lists.id">
            <p>{{ lists.name }}</p>
            <img :src="lists.picUrl" alt="">
          </router-link>
        </ul>
      </div>
      <ul class="videolist">
        <h3>
          <p class="classify-title-bg"></p>
          <p class="classify-ttitle-content">推荐MV</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAXVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5BxTwAAAAHnRSTlMA8DLSZRINFdfLbAnFvwe6NQW1gVLqk3X0rCzhWkSkuBJrAAABqElEQVR42u3cS27DMAxFUbZO7DpJm7b+5cv9L7MOOjHkSTJ7JO7ZwQVEQBAgGgAAAAQ1U9fdLb7RH6pvC+7s/96Cl0zuKUq27jlKbr4sebewOk9S0nmSkt6TlOwHn2WY+N6zlOwSl0SdE0r0UKKHEj2U6KFEDyV6KNFDiZ48JRtK5FCihxI9lOihRA8leijRQ4keSvRQoocSPZTooUQPJXoo0UOJHkr0UKKHEj2U6KFEDyV6KNFDiR5K9GQuuVhMq5IhasnOS73FtPHCqbGYei90FtRYhBwsqHsRcrWgpiKkspi2QxEyWkj71gsx/5M3q46zRdRUXmhrC6j58EJFx/PooCMEOrTQoSVvR5Z7CR0voIOOEOjQQocWOrRss3Qkeb+iQwsdWtYdhywdewuIDi10aKFDCx1a6NBChxY6tNChZd3xmaXjywKiQwsdWujQQocWOrTQoYUOLXRoWXccs3T8WEB0aKFDS52lo/XCr4V0TNJxS9JhxxTzMRuSdNgpxbmatUk6rEvSYfU1R4fZZQi9D2ChGR8DX0Xdj7NU91PMNRMAAAB41R9lfEx7DZ+dqQAAAABJRU5ErkJggg==" alt="" class="next-img">
        </h3>
        <router-link tag="li" :to="{name: 'mvstart', query: {id: list.id}}" v-for="list in mvid" :key="list.id">
          <h2>
            <p>{{ list.name }}</p>
            <span>播放数: <i>{{ list.playCount }}</i></span>
          </h2>
          <img :src="list.cover" :alt="list.name">
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mvid: [],
      aloneHave: []
    }
  },
  created () {
    fetch('http://localhost:3000/personalized/mv')
      .then(res => res.json())
      .then(dats => {
        console.log(dats)
        this.aloneHave = dats.result
      })
  },
  mounted () {
    fetch('http://localhost:3000/mv/first?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.mvid = data.data
      })
  }
}
</script>

<style scoped lang="scss">
.videolist {
  h3 {
    display: flex;
    height: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.16rem;
    .classify-title-bg {
      width: 0.04rem;
      height: 0.15rem;
      background: #d43c33;
      margin-right: 0.10rem;
    }
    .next-img {
    width: 0.13rem;
    height: 0.13rem;
    margin-left: 0.10rem;
    }
  }
  h2 {
    display: flex;
    justify-content: space-between;
    height: 0.3rem;
    padding: 0 0.15rem;
    p {
      font-size: 0.18rem;
      line-height: 0.34rem;
    }
    span {
      font-size: 0.12rem;
      line-height: 0.45rem;
    }
  }
  img {
    height: 2rem;
    width: 100%;
  }
}
.aloneHave {
  h2 {
    display: flex;
    height: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.16rem;
    .classify-title-bg {
      width: 0.04rem;
      height: 0.15rem;
      background: #d43c33;
      margin-right: 0.10rem;
    }
    .next-img {
    width: 0.13rem;
    height: 0.13rem;
    margin-left: 0.10rem;
    }
  }
  ul {
    padding: 0 0.02rem 0 0.02rem;
    li {
      p {
        height: 0.3rem;
        line-height: 0.35rem;
        padding-left: 0.08rem;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
.red {
  // flex-shrink: 1;
  width: 100%;
  height: auto;
}
.cont {
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;
  height: 100%;
}
</style>
