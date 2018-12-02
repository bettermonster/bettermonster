<template>
  <div class="jiemu">
    <ul>
      <router-link tag="li" :to="{name: 'musicstart', query: {id: list.mainSong.id}}" v-for="list in jiemu" :key="list.id">
        <img :src="list.mainSong.album.picUrl" :alt="list.mainSong.name">
        <p>{{list.mainSong.name}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rd: {},
      id: '',
      jiemu: []
    }
  },
  mounted () {
    fetch(`http://localhost:3000/dj/detail?rid=${this.$route.query.id}`)
      .then(res => res.json())
      .then(dat => {
        this.rd = dat.djRadio
        this.id = dat.djRadio.id
        fetch(`http://localhost:3000/dj/program?rid=${this.id}&limit=40`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.jiemu = data.programs
          })
      })
  }
}
</script>

<style scoped lang="scss">
.jiemu {
  width: 100%;
  height: 100%;
  overflow: auto;
}
ul {
  display: flex;
  height: auto;
  flex-direction: column;
  padding-left: 0.05rem;
  li {
    display: flex;
    height: 0.6rem;
    align-items: center;
    img {
      height: 0.5rem;
      width: auto;
      margin-right: 0.1rem;
    }
  }
}
</style>
