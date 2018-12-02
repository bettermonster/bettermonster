<template>
  <div class="header">
    <div class="mint-search">
      <span @click="goback" class="iconfont icon-xiangzuojiantou"></span>
      网易云音乐
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/lib/reset.scss';
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
  position: relative;
  span {
    position: absolute;
    height: 0.45rem;
    left: 0.1rem;
    top: 0;
    display: block;
    line-height: 0.45rem;
    text-align: center;
    width: 0.1rem;
    font-weight: 500;
    font-size: 0.18rem;
  }
}
</style>
