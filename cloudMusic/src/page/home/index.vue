<template>
  <div class="content">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for = "(itm, index) in item" :key = "index">
        <img :src="itm.imageUrl" :alt="itm.typeTitle">
      </mt-swipe-item>
    </mt-swipe>
    <my-ritui></my-ritui>
  </div>
</template>

<script>
import riTui from '@/components/daytui'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe, SwipeItem)
export default {
  components: {
    'my-ritui': riTui
  },
  computed: {
    item () {
      return this.$store.state.home.banner
    }
  },
  created () {
    this.$store.dispatch('getBanner')
  }
}
</script>

<style scoped>
.content {
  overflow: auto;
}
</style>
