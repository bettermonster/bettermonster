<template>
  <div>
    <h2>{{ rd.name }}</h2>
    <dl>
      <dt>{{ rd.category }}</dt>
      <dd>{{ rd.desc }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rd: {}
    }
  },
  mounted () {
    fetch(`http://localhost:3000/dj/detail?rid=${this.$route.query.id}`)
      .then(res => res.json())
      .then(dat => {
        console.log(dat)
        this.rd = dat.djRadio
      })
  }
}
</script>

<style scoped>

</style>
