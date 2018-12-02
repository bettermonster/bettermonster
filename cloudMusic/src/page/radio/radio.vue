<template>
  <div class="content">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for = "(itm, index) in item" :key = "index">
        <img :src="itm.imageUrl" :alt="itm.typeTitle">
      </mt-swipe-item>
    </mt-swipe>
    <div class="gowhere">
      <dl>
        <dt>
          <img src="data:image/png;base64,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" alt="" class="classify">
          <p>电台分类</p>
        </dt>
      </dl>
      <dl>
        <dt>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAOVBMVEUAAACGeKiGeaeGeaqGeKiFeKeAgK+GeaeFeqqHeKeGeKiGeamGeKiFeKiGeKiGeaiFeaiFd6iGeahNRI5XAAAAEnRSTlMAgMA/8GAQoDAg4FDQkLBwz28OCjgoAAAD+0lEQVR42u3c2XbiMBAE0JbU2rwAqf//2JmTnEBYTGtiEG6m73seCiHbyJUmY4wxxhhjjDHm/xJ3/iORfhl/HfQnGfEpk3YDvlTSLQDvsSQe33TvkoAjR5rtcMSal6QC77EkGT8MpFbFmT01KuG5Cv2TNB5whmMlUciM5+NdpAZhdNkzbjnsXAyJlhSPXg7SurgBIs63s4yMfjgK+1u0+BRZGF0F+Q4oc3QlDehFvrU5NDoIf9vF/IAgE10Z0BvToohGmS4V9DfSkjShTRE+gz4cnfzuyhO3sEUARyuTRNp+kJYkkW4Y0Z+jVUmi8IjZT6E1SSLdNqG3gQSF5RzXAnqLJCm/+lru0NdEMo8ltCxN6GlIzwpCyaOfKVEDFp6dl0RGH+yoRfr9Bhtn/3zzSG0Czug9FdpjkSdNZpzRe7zlsYw0YSwLpEfCHZH0CPhhThRZ6WUr4ShX+is5Vrkix83uyzHbrPI9SeHPGIF+qFnfghCl2V8feNfscyFjjDHGGGOupDBq7wGe2gwzqVe/m0HaZY2/C2+oKn+p35B1HjBeqTqPs645rWe+FxLjZCS9nN73CedY7en13VrgobY+0zxbpVYluNkPuOSzG4P0/z/ooaEuW08JFrDPS2nKgF4G6RNFk/zal9Pyna0y2sQNlFGi/DpX5oW7Tg9cH9Ey3UKFLj9nRRjdpQfskY3XZVdctfboz629/mYNLdPYkkNDEIpyjq3UZfe0JkmW6xK9FFqRJItNnG6GNX2tHWmqy9KEJZUWZfTl36QuOyWSHX6zIpR26McnaiA8FSyKA/oYIgnkSvl9xWX/bNkFahPvXbU0cVh0IE3epmU6YJmqxhYuKT0DDucXutFrLccXHPH+M9mkM8hxj7BLxzudyj0yHku/J3vWOLJmHM5jfLeYWdUXyxhjjDHGGKOc84f8Dg1mj79Yf5Kovz73ZdB45HBDfJcxuQPwFpOLA/AeS+KBt5hcHLSe+V7aAW8xubhonlFzEiLj3Bx0XbpOU3KFObm3hQ/3bB8hkSTNaOAL3VYzo4tdpfv8qqbqB/qZhRcjjfLrWzWZ6CFjcl9fz5wfEcRvYeJkeMhX6+V1LcA/YrNvotNY15bHuGyhCQhEWpeEi4ber5yEi44Cc5rEHDqCCEm4bKUtK/dl0yTnuIb+EgkqY0ncTO0X8Kt7vxuZJV0eE+Tlk+PdyjG5W+mU55Vjcjcx7rf1CCGIz84v/oXIua7t/fqGn/zPNgaSyF92Jk08Lmg9OsWbjMmt+GmY8EXf9J2AE45EwSs9OU3ARfE3DjonvWR8yYm+RdZ4KJ+m8/7yaXgxa3srGp0rV/H2817XebwxxhhjjDHGGGOMMcYY5f4AF/iWhivLfUEAAAAASUVORK5CYII=" alt="" class="classify">
          <p>电台排行</p>
        </dt>
      </dl>
    </div>
    <div class="div">
      <div class="niceTuiJian">
        <h2>
          <p class="classify-title-bg"></p>
          <p class="classify-ttitle-content">{{ names }}</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAXVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5BxTwAAAAHnRSTlMA8DLSZRINFdfLbAnFvwe6NQW1gVLqk3X0rCzhWkSkuBJrAAABqElEQVR42u3cS27DMAxFUbZO7DpJm7b+5cv9L7MOOjHkSTJ7JO7ZwQVEQBAgGgAAAAQ1U9fdLb7RH6pvC+7s/96Cl0zuKUq27jlKbr4sebewOk9S0nmSkt6TlOwHn2WY+N6zlOwSl0SdE0r0UKKHEj2U6KFEDyV6KNFDiZ48JRtK5FCihxI9lOihRA8leijRQ4keSvRQoocSPZTooUQPJXoo0UOJHkr0UKKHEj2U6KFEDyV6KNFDiR5K9GQuuVhMq5IhasnOS73FtPHCqbGYei90FtRYhBwsqHsRcrWgpiKkspi2QxEyWkj71gsx/5M3q46zRdRUXmhrC6j58EJFx/PooCMEOrTQoSVvR5Z7CR0voIOOEOjQQocWOrRss3Qkeb+iQwsdWtYdhywdewuIDi10aKFDCx1a6NBChxY6tNChZd3xmaXjywKiQwsdWujQQocWOrTQoYUOLXRoWXccs3T8WEB0aKFDS52lo/XCr4V0TNJxS9JhxxTzMRuSdNgpxbmatUk6rEvSYfU1R4fZZQi9D2ChGR8DX0Xdj7NU91PMNRMAAAB41R9lfEx7DZ+dqQAAAABJRU5ErkJggg==" alt="" class="next-img">
        </h2>
        <ul>
          <router-link tag="li" :to="{ path: '/radio/radiodetail', query: {id: list.radio.id}}" v-for="list in niceTuiJian" :key="list.id">
            <img :src="list.coverUrl" :alt="list.name">
            <p>{{ list.name }}</p>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe, SwipeItem)
export default {
  data () {
    return {
      niceTuiJian: [],
      names: ''
    }
  },
  computed: {
    item () {
      return this.$store.state.home.banner
    }
  },
  created () {
    this.$store.dispatch('getBanner')
  },
  mounted () {
    fetch('http://localhost:3000/dj/catelist')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
      })
    fetch('http://localhost:3000/program/recommend')
      .then(res => res.json())
      .then(dat => {
        console.log(dat)
        this.niceTuiJian = dat.programs
        this.names = dat.name
      })
  }
}
</script>

<style scoped lang="scss">
@import '@/lib/reset.scss';
.gowhere {
  width: 100%;
  height: 0.50rem;
  display: flex;
  border-bottom: 1px solid #eaeaea;
  dl {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    dt {
      width: 100%;
      height: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 0.26rem;
        height: 0.26rem;
        margin-right: 0.15rem;
      }
    }
  }
}
.content {
    flex-grow: 1;
    height: 100%;
}
.div {
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;
  height: 100%;
}
.niceTuiJian {
  height: auto;
  h2 {
    display: flex;
    height: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.16rem;
    p {
      display: block;
    }
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
    height: 100%;
    padding: 0 0.04rem 0 0.01rem;
    li {
      height: 1.26rem;
      align-items: center;
      display: flex;
      justify-content: space-between;
      p {
        width: 65%;
      }
      img {
        height: 1.2rem;
        width: auto;
      }
    }
  }
}
</style>
