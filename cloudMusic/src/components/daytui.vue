<template>
  <div class="box">
    <dl class="boxone">
      <dt class="classify-title">
        <h2>
          <p class="classify-title-bg"></p>
          <p class="classify-ttitle-content">推荐歌单</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAXVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5BxTwAAAAHnRSTlMA8DLSZRINFdfLbAnFvwe6NQW1gVLqk3X0rCzhWkSkuBJrAAABqElEQVR42u3cS27DMAxFUbZO7DpJm7b+5cv9L7MOOjHkSTJ7JO7ZwQVEQBAgGgAAAAQ1U9fdLb7RH6pvC+7s/96Cl0zuKUq27jlKbr4sebewOk9S0nmSkt6TlOwHn2WY+N6zlOwSl0SdE0r0UKKHEj2U6KFEDyV6KNFDiZ48JRtK5FCihxI9lOihRA8leijRQ4keSvRQoocSPZTooUQPJXoo0UOJHkr0UKKHEj2U6KFEDyV6KNFDiR5K9GQuuVhMq5IhasnOS73FtPHCqbGYei90FtRYhBwsqHsRcrWgpiKkspi2QxEyWkj71gsx/5M3q46zRdRUXmhrC6j58EJFx/PooCMEOrTQoSVvR5Z7CR0voIOOEOjQQocWOrRss3Qkeb+iQwsdWtYdhywdewuIDi10aKFDCx1a6NBChxY6tNChZd3xmaXjywKiQwsdWujQQocWOrTQoYUOLXRoWXccs3T8WEB0aKFDS52lo/XCr4V0TNJxS9JhxxTzMRuSdNgpxbmatUk6rEvSYfU1R4fZZQi9D2ChGR8DX0Xdj7NU91PMNRMAAAB41R9lfEx7DZ+dqQAAAABJRU5ErkJggg==" alt="" class="next-img">
        </h2>
      </dt>
      <dd class="classify-list">
        <ul class="list-ul">
          <router-link tag="li" :to="{name: 'detail', query:{id: item.id}}" class="list-item" v-for = "item in list" :key="item.id">
            <div class="list-item-bg">
              <!-- <div class="list-item-title">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA0NK5wF28GqH17tqCcAp3h2UmFeiPazkS49+tlyD8xrR8WU8tDkVCMwbypZuU69XLVYpJqGE89xYKJaQAAAWdSURBVHja7d3pdtowEAXgS01jbMDs+76FPRBIyLz/k7XntH9ahLFnLFvt0fcAJJexpZFkH2BZlmVZlhWF25lXhtP8b06hWn6/1QP8S5bzqlMktf6+vcS/oFNxPHpi58zWMNmmPN1RRLvBZwNGWg+bFNN5toFh6kefWPoVk+oyn5DAdAEjBO0eCfWqLrIWVN4oCccGYjA2xk/epYvMlH1KkFdaIRPrIiXs7TvS1xiQBs4IKVv4pIVXQZq6e9Lm2wapeW2STi2kpEWanV2kwD2Tdm83aNeJMQX6E2ewP7SqpZ8OTpFiKEOzOUXiOa3arXG/+K21nCZFsg+gU5siOF3WCNFdV6MUZ7KCPiV6Kl9z8dyokqdncl3oMqQneqURomrM+s8q2wCHPMfginiuUwpVdKFDgcJ4rRFnLD9SmP4ISDdHr7wCjxv6uc16qjl2NQjU92E1aSBZB3rMcSFzK9JD5wBJmtFDfg1i29KYHpkiQe/00IuLJCxz9MgFidnQQxVAe09dQ0JWPXqg2Umy7B6pjV+RDIceyDeQpGWR1HYuklCmB6pI2GpAai9IwHL8oOCfSF5B3/Jk+6DeX1cwcJN81SF1JCV/Az0+SCkHoTUp9UbQZaDlhgz6pOItoc+UlJYaLqzxGhoFZ1LJQ6BDSp/Qyu2Tyjv4cpzLVa6+I4X+NuG9nwG0eyWVGbh6pNDrQr8KKXhukptY4w3SMCGFAli2TXbfLufuSKEOjhqjfdO8lhuCo6+6TBsQkHddnD//nRTaSE3Xp3slxFdUHYtBRL4O8reIa0EKG6SpmMj6/UV6r8ld6V4RMY1Ude1CSr5ZcEM8VfmdJreke0fE86YYersQk5fEl3dtLTAkvz59lZ7pjF2k7yxtuHz1B8jJJ4HdFtHdZGtmvXPJQjZmncCg5Rz5IFviVpCJumhObNA9F9nISf6VuXwzRuei911yYFhDRlxJy3eiOytk5cQfdwK6c4YG7Lm5y2+fq8jMnD+TzKQNju6bZMbe2P/aIjt9drdUTGUTSDCGThBJYMCSKnzDs8lel82RoSt3Mljo3j2Rt1sb7n5SgCyNmU1Ki3FNalVkHrt/mNMxPtqCmDG35g7IVIHZaJwYT0xpdWRubjXNmkaAKnNq9xmXpFYz5nlsM8VXB5jzgcNs0trIVI3ZbBUZTzpo9Z35rNA3+tt3xGGD2CA2SDgbxAaxQcLZIDaIDRLOBrFBbJBwxgTJ0d+K+T99lDvQ5lYZ5P9UFAYJl293kbhGeUIK4ksr3NfQRaJGhTGR5iBqXhkMjNdcuZdWdJMRElJX/Fk9FVHz3jXsXWkNovdN2hJlH4TaEGuRCUHoU14PM4J4Iw0vImketdRepK8lGFIR4cU1JGMqQv5KdIxuTkWoIjnqNKgigpP4BhlVEVqDqW1YkCGY8oYF6YFnRYYFoTpY3o0LsmB3J0aNWuwB+MO4irTA4hgX5AMsL8ZdWs7/UhHHvIrYIDaIDWKD2CA2iA1ig9ggNogNYoPYIDaIDWJmkH9gF+WMKCbmV8RBFI75QQqIomD+pXVBFDPzK1JGFHPimIJlShxz0XlxuD1YPnSeKjVTPFY4EkNf57dUA0tb55e2IIYOWNY6z8K3PsX2BZ7tmGLbIaqLztFX3kdcEFXXY9wiTJX4BVkhsirF1QWTq/X8OOhxZxH9U2JvixgWjBmKqcN+yE1D53iEwEBrK7Tqxal2AIGGT9HlAsS09Ciq8Sa1p0zfXJ0f3wYDb5DcgOEasSYHiDkUid/R+fOge8gFeYrgNAKT+8LoRLUNXdMV+NpfT4q9SO3XSC8QGYUWZdBAYuoTCuF0ILU8eKSWuyJRtX5oDLmgpviyvP0rEjd3VCnKIySmO6/unW/NX5PSeTrU9iJi8Do7OKdfc30z5xRKiwCWZVmWZVmWZVlWGn4Avf0KqZB/GXYAAAAASUVORK5CYII=" alt="" class="icon-listen">
                <span>20万</span>
              </div> -->
              <img class="list-item-bg" :src="item.picUrl" title="sd">
            </div>
            <p class="list-item-describe">{{ item.name }}</p>
          </router-link>
        </ul>
      </dd>
    </dl>
    <dl class="boxone">
      <dt class="classify-title">
        <h2>
          <p class="classify-title-bg"></p>
          <p class="classify-ttitle-content">网友精选</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAXVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5BxTwAAAAHnRSTlMA8DLSZRINFdfLbAnFvwe6NQW1gVLqk3X0rCzhWkSkuBJrAAABqElEQVR42u3cS27DMAxFUbZO7DpJm7b+5cv9L7MOOjHkSTJ7JO7ZwQVEQBAgGgAAAAQ1U9fdLb7RH6pvC+7s/96Cl0zuKUq27jlKbr4sebewOk9S0nmSkt6TlOwHn2WY+N6zlOwSl0SdE0r0UKKHEj2U6KFEDyV6KNFDiZ48JRtK5FCihxI9lOihRA8leijRQ4keSvRQoocSPZTooUQPJXoo0UOJHkr0UKKHEj2U6KFEDyV6KNFDiR5K9GQuuVhMq5IhasnOS73FtPHCqbGYei90FtRYhBwsqHsRcrWgpiKkspi2QxEyWkj71gsx/5M3q46zRdRUXmhrC6j58EJFx/PooCMEOrTQoSVvR5Z7CR0voIOOEOjQQocWOrRss3Qkeb+iQwsdWtYdhywdewuIDi10aKFDCx1a6NBChxY6tNChZd3xmaXjywKiQwsdWujQQocWOrTQoYUOLXRoWXccs3T8WEB0aKFDS52lo/XCr4V0TNJxS9JhxxTzMRuSdNgpxbmatUk6rEvSYfU1R4fZZQi9D2ChGR8DX0Xdj7NU91PMNRMAAAB41R9lfEx7DZ+dqQAAAABJRU5ErkJggg==" alt="" class="next-img">
        </h2>
      </dt>
      <dd class="classify-list">
        <ul class="list-ul">
          <router-link tag="li" :to="{name: 'detail', query:{id: items.id}}" class="list-item" v-for = "items in hot" :key="items.id">
            <div class="list-item-bg">
              <!-- <div class="list-item-title">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA0NK5wF28GqH17tqCcAp3h2UmFeiPazkS49+tlyD8xrR8WU8tDkVCMwbypZuU69XLVYpJqGE89xYKJaQAAAWdSURBVHja7d3pdtowEAXgS01jbMDs+76FPRBIyLz/k7XntH9ahLFnLFvt0fcAJJexpZFkH2BZlmVZlhWF25lXhtP8b06hWn6/1QP8S5bzqlMktf6+vcS/oFNxPHpi58zWMNmmPN1RRLvBZwNGWg+bFNN5toFh6kefWPoVk+oyn5DAdAEjBO0eCfWqLrIWVN4oCccGYjA2xk/epYvMlH1KkFdaIRPrIiXs7TvS1xiQBs4IKVv4pIVXQZq6e9Lm2wapeW2STi2kpEWanV2kwD2Tdm83aNeJMQX6E2ewP7SqpZ8OTpFiKEOzOUXiOa3arXG/+K21nCZFsg+gU5siOF3WCNFdV6MUZ7KCPiV6Kl9z8dyokqdncl3oMqQneqURomrM+s8q2wCHPMfginiuUwpVdKFDgcJ4rRFnLD9SmP4ISDdHr7wCjxv6uc16qjl2NQjU92E1aSBZB3rMcSFzK9JD5wBJmtFDfg1i29KYHpkiQe/00IuLJCxz9MgFidnQQxVAe09dQ0JWPXqg2Umy7B6pjV+RDIceyDeQpGWR1HYuklCmB6pI2GpAai9IwHL8oOCfSF5B3/Jk+6DeX1cwcJN81SF1JCV/Az0+SCkHoTUp9UbQZaDlhgz6pOItoc+UlJYaLqzxGhoFZ1LJQ6BDSp/Qyu2Tyjv4cpzLVa6+I4X+NuG9nwG0eyWVGbh6pNDrQr8KKXhukptY4w3SMCGFAli2TXbfLufuSKEOjhqjfdO8lhuCo6+6TBsQkHddnD//nRTaSE3Xp3slxFdUHYtBRL4O8reIa0EKG6SpmMj6/UV6r8ld6V4RMY1Ude1CSr5ZcEM8VfmdJreke0fE86YYersQk5fEl3dtLTAkvz59lZ7pjF2k7yxtuHz1B8jJJ4HdFtHdZGtmvXPJQjZmncCg5Rz5IFviVpCJumhObNA9F9nISf6VuXwzRuei911yYFhDRlxJy3eiOytk5cQfdwK6c4YG7Lm5y2+fq8jMnD+TzKQNju6bZMbe2P/aIjt9drdUTGUTSDCGThBJYMCSKnzDs8lel82RoSt3Mljo3j2Rt1sb7n5SgCyNmU1Ki3FNalVkHrt/mNMxPtqCmDG35g7IVIHZaJwYT0xpdWRubjXNmkaAKnNq9xmXpFYz5nlsM8VXB5jzgcNs0trIVI3ZbBUZTzpo9Z35rNA3+tt3xGGD2CA2SDgbxAaxQcLZIDaIDRLOBrFBbJBwxgTJ0d+K+T99lDvQ5lYZ5P9UFAYJl293kbhGeUIK4ksr3NfQRaJGhTGR5iBqXhkMjNdcuZdWdJMRElJX/Fk9FVHz3jXsXWkNovdN2hJlH4TaEGuRCUHoU14PM4J4Iw0vImketdRepK8lGFIR4cU1JGMqQv5KdIxuTkWoIjnqNKgigpP4BhlVEVqDqW1YkCGY8oYF6YFnRYYFoTpY3o0LsmB3J0aNWuwB+MO4irTA4hgX5AMsL8ZdWs7/UhHHvIrYIDaIDWKD2CA2iA1ig9ggNogNYoPYIDaIDWJmkH9gF+WMKCbmV8RBFI75QQqIomD+pXVBFDPzK1JGFHPimIJlShxz0XlxuD1YPnSeKjVTPFY4EkNf57dUA0tb55e2IIYOWNY6z8K3PsX2BZ7tmGLbIaqLztFX3kdcEFXXY9wiTJX4BVkhsirF1QWTq/X8OOhxZxH9U2JvixgWjBmKqcN+yE1D53iEwEBrK7Tqxal2AIGGT9HlAsS09Ciq8Sa1p0zfXJ0f3wYDb5DcgOEasSYHiDkUid/R+fOge8gFeYrgNAKT+8LoRLUNXdMV+NpfT4q9SO3XSC8QGYUWZdBAYuoTCuF0ILU8eKSWuyJRtX5oDLmgpviyvP0rEjd3VCnKIySmO6/unW/NX5PSeTrU9iJi8Do7OKdfc30z5xRKiwCWZVmWZVmWZVlWGn4Avf0KqZB/GXYAAAAASUVORK5CYII=" alt="" class="icon-listen">
                <span>20万</span>
              </div> -->
              <img class="list-item-bg" :src="items.coverImgUrl" title="sd">
            </div>
            <p class="list-item-describe">{{ items.name }}</p>
          </router-link>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
// import Vue from 'vue'
// const bus = new Vue()
export default {
  data () {
    return {
      list: [],
      hot: []
    }
  },
  mounted () {
    fetch('http://localhost:3000/personalized')
      .then(res => res.json())
      .then(data => {
        // console.log(data.result)
        var dat = data.result.slice(0, 6)
        this.list = dat
      })
    fetch('http://localhost:3000/top/playlist?limit=21&order=new')
      .then(res => res.json())
      .then(datas => {
        // console.log(datas)
        this.hot = datas.playlists
      })
  }
}
</script>

<style scoped lang="scss">
.boxone {
  .classify-title {
  display: flex;
  height: 0.5rem;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.16rem;
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
}
.classify-list, .list-ul{
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
.list-item {
  width: 30%;
  display: flex;
  overflow: hidden;
  margin-bottom: 0.20rem;
  flex-direction: column
}
.list-item-bg {
  width: 100%;
  height: 1.18rem;
  justify-content: flex-end;
  background-size: 100% 100%;
}
.list-item-describe {
  width: 94%;
  margin-left: 4%;
  font-size: 0.14rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}
.list-item-title {
  height: 0.2rem;
  display: flex;
  align-items: center;
  margin-right: 0.6rem;
  font-size: 0.12rem;
  color: #fff;
}
.list-item-title  span {
  height: 0.2rem;
  display: flex;
  align-items: center;
  margin-right: 0.6rem;
  font-size: 0.12rem;
  color: #fff;
}
.icon-listen {
  width: 0.12rem;
  height: 0.12rem;
  margin-right: 0.05rem;
}
}
</style>
