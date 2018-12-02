<template>
  <div class="what">
    <div class="bg" :style="{backgroundImage: 'url(' + img + ')'}">
      <div class="mint-search">
        <span @click="goback" class="iconfont icon-xiangzuojiantou"></span>
        电台
      </div>
    </div>
    <div class="gowhere">
      <mt-navbar v-model="selected">
        <mt-tab-item id="tab-container1">
          <!-- <img src="data:image/png;base64,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" alt="" class="classify"> -->
          <p>电台介绍</p>
        </mt-tab-item>
        <mt-tab-item id="tab-container2">
          <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAOVBMVEUAAACGeKiGeaeGeaqGeKiFeKeAgK+GeaeFeqqHeKeGeKiGeamGeKiFeKiGeKiGeaiFeaiFd6iGeahNRI5XAAAAEnRSTlMAgMA/8GAQoDAg4FDQkLBwz28OCjgoAAAD+0lEQVR42u3c2XbiMBAE0JbU2rwAqf//2JmTnEBYTGtiEG6m73seCiHbyJUmY4wxxhhjjDHm/xJ3/iORfhl/HfQnGfEpk3YDvlTSLQDvsSQe33TvkoAjR5rtcMSal6QC77EkGT8MpFbFmT01KuG5Cv2TNB5whmMlUciM5+NdpAZhdNkzbjnsXAyJlhSPXg7SurgBIs63s4yMfjgK+1u0+BRZGF0F+Q4oc3QlDehFvrU5NDoIf9vF/IAgE10Z0BvToohGmS4V9DfSkjShTRE+gz4cnfzuyhO3sEUARyuTRNp+kJYkkW4Y0Z+jVUmi8IjZT6E1SSLdNqG3gQSF5RzXAnqLJCm/+lru0NdEMo8ltCxN6GlIzwpCyaOfKVEDFp6dl0RGH+yoRfr9Bhtn/3zzSG0Czug9FdpjkSdNZpzRe7zlsYw0YSwLpEfCHZH0CPhhThRZ6WUr4ShX+is5Vrkix83uyzHbrPI9SeHPGIF+qFnfghCl2V8feNfscyFjjDHGGGOupDBq7wGe2gwzqVe/m0HaZY2/C2+oKn+p35B1HjBeqTqPs645rWe+FxLjZCS9nN73CedY7en13VrgobY+0zxbpVYluNkPuOSzG4P0/z/ooaEuW08JFrDPS2nKgF4G6RNFk/zal9Pyna0y2sQNlFGi/DpX5oW7Tg9cH9Ey3UKFLj9nRRjdpQfskY3XZVdctfboz629/mYNLdPYkkNDEIpyjq3UZfe0JkmW6xK9FFqRJItNnG6GNX2tHWmqy9KEJZUWZfTl36QuOyWSHX6zIpR26McnaiA8FSyKA/oYIgnkSvl9xWX/bNkFahPvXbU0cVh0IE3epmU6YJmqxhYuKT0DDucXutFrLccXHPH+M9mkM8hxj7BLxzudyj0yHku/J3vWOLJmHM5jfLeYWdUXyxhjjDHGGKOc84f8Dg1mj79Yf5Kovz73ZdB45HBDfJcxuQPwFpOLA/AeS+KBt5hcHLSe+V7aAW8xubhonlFzEiLj3Bx0XbpOU3KFObm3hQ/3bB8hkSTNaOAL3VYzo4tdpfv8qqbqB/qZhRcjjfLrWzWZ6CFjcl9fz5wfEcRvYeJkeMhX6+V1LcA/YrNvotNY15bHuGyhCQhEWpeEi4ber5yEi44Cc5rEHDqCCEm4bKUtK/dl0yTnuIb+EgkqY0ncTO0X8Kt7vxuZJV0eE+Tlk+PdyjG5W+mU55Vjcjcx7rf1CCGIz84v/oXIua7t/fqGn/zPNgaSyF92Jk08Lmg9OsWbjMmt+GmY8EXf9J2AE45EwSs9OU3ARfE3DjonvWR8yYm+RdZ4KJ+m8/7yaXgxa3srGp0rV/H2817XebwxxhhjjDHGGGOMMcYY5f4AF/iWhivLfUEAAAAASUVORK5CYII=" alt="" class="classify"> -->
          <p>电台节目</p>
        </mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab-container1">
        <min-dev></min-dev>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <min-jiemu></min-jiemu>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem, Search, Tabbar } from 'mint-ui'
Vue.use(Navbar, TabItem, Search, Tabbar)
export default {
  data () {
    return {
      rd: {},
      img: ``,
      selected: 'tab-container1'
    }
  },
  mounted () {
    fetch(`http://localhost:3000/dj/detail?rid=${this.$route.query.id}`)
      .then(res => res.json())
      .then(dat => {
        // console.log(dat)
        this.rd = dat.djRadio
        this.img = dat.djRadio.picUrl
      })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  components: {
    'min-header': () => import('@/components/minheader'),
    'min-dev': () => import('@/page/radio/dev'),
    'min-jiemu': () => import('@/page/radio/jiemu')
  }
}
</script>

<style scoped lang="scss">
@import '@/lib/reset.scss';
.what {
  height: 100%;
  width: 100%;
}
.mint-tab-container {
  height: 100%;
  width: 100%;
  overflow: auto;
}
.mint-tab-container-wrap {
  height: auto;
}
.bg {
  height: 3.0rem;
  width: auto;
  background-size: cover;
}
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
.gowhere {
  width: 100%;
  height: 0.52rem;
  .mint-navbar {
    @include border(0 0 0.01rem 0, #ccc, solid);
    .mint-tab-item {
      @include text-color(#d33a31);
      @include font-size(0.16rem);
    }
  }
  .mint-navbar .is-selected {
      border: none;
      @include border(0 0 0.06rem 0, #d33a31, solid);
  }
}
</style>
