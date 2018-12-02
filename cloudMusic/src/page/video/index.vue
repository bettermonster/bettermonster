<template>
  <div class="box">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
