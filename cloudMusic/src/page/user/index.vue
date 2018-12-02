<template>
  <div class="box">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/lib/reset.scss';
.box {
  width: 100%;
  height: 100%;
  background: #f9eeed;
}
</style>
