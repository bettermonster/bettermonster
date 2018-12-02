<template>
  <div class="search">
    <mt-search v-model="keyword" cancel-text="取消" placeholder="搜索">
    </mt-search>
    <div class="coment">
      <ul class="suggest">
        <li v-for="ite in sug" :key="ite.id" @click="put(ite.name)">
          <p>{{ ite.name }}</p>
          <span>{{ ite.artists[0].name }}</span>
        </li>
      </ul>
      <ul class="hot">
        <li @click="put(list.first)" v-for="(list, index) in hot" :key="index">
          <el-tag  hit disable-transitions :type="nice[index]">{{list.first}}</el-tag>
        </li>
      </ul>
      <div class="res">
        <ul class="result">
          <router-link :to="{name: 'musicstart', query: {id: item.id}}" tag="li" v-for="item in result" :key="item.id">
            <p>{{ item.name }}</p>
            <span>{{ item.artists[0].name }}</span>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tag } from 'element-ui'
import { Search, Toast } from 'mint-ui'
Vue.use(Search)
Vue.use(Tag)
export default {
  data () {
    return {
      keyword: '',
      result: [],
      sug: [],
      hot: [],
      nice: []
    }
  },
  mounted () {
    var box = document.querySelector('.mint-searchbar')
    // console.log(box)
    var n = document.createElement('a')
    box.appendChild(n)
    var news = box.lastElementChild
    news.setAttribute('class', 'mint-searchbar-search')
    news.innerHTML = '搜索'
    news.onclick = () => {
      this.search()
    }
    // 取消时还原页面
    news.previousElementSibling.onclick = () => {

    }
    // 搜索建议
    var suggest = document.querySelector('.mint-searchbar-core')
    suggest.onkeyup = () => {
      document.querySelector('.suggest').style.display = 'block'
      // var i = document.querySelector('.mint-searchbar-core').value
      fetch(`http://localhost:3000/search/suggest?keywords=${this.keyword}&limit=10`)
        .then(res => res.json())
        .then(data => {
          if (data.code === 200) {
            this.sug = data.result.songs
          } else {
            Toast('请输入合适信息')
          }
        })
    }
    // 热门搜索
    fetch(`http://localhost:3000/search/hot`)
      .then(res => res.json())
      .then(datad => {
        console.log(datad)
        this.hot = datad.result.hots
        // 改变tag标签颜色
        var nice = ['success', 'info', 'warning', 'danger']
        var m = []
        for (var i = 0; i < this.hot.length; i++) {
          var c = parseInt(Math.random() * (4))
          m.push(c)
        }
        var l = []
        for (var j = 0; j < m.length; j++) {
          var n = m[j]
          l.push(nice[n])
        }
        this.nice = l
      })
  },
  methods: {
    search () {
      document.querySelector('.suggest').style.display = 'none'
      if (document.querySelector('.mint-searchbar-core').value === '') {
        Toast('请输入内容')
      } else {
        var nam = document.querySelector('.mint-searchbar-core').value
        fetch(`http://localhost:3000/search?keywords=${nam}`)
          .then(res => res.json())
          .then(data => {
            if (data.code === 200) {
              // console.log(data)
              this.result = data.result.songs
            }
          })
      }
    },
    put (name) {
      console.log(name)
      document.querySelector('.mint-searchbar-core').value = name
      this.search()
    },
    reset () {
      console.log(this)
    }
  }
}
</script>

<style lang="scss">
.search {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .mint-search {
    flex-shrink: 0;
    height: 0.45rem;
    background-color: #d43c33;
    .mint-searchbar {
      background-color: #d43c33;
      .mint-searchbar-cancel {
        color: #000;
      }
      .mint-searchbar-search {
        color: #000;
        margin-left: 10px;
        text-decoration: none
      }
    }
    .mint-search-list {
      display: none;
    }
  }
  .suggest {
    position: absolute;
    top: 0.45rem;
    background: rgba(212, 60, 51,0.9);
    width: 100%;
    height: auto;
    li {
      display: flex;
      align-items: center;
      height: 0.6rem;
      width: 100%;
      padding: 0 0.15rem  0rem 0.25rem;
      font-size: 0.14rem;
      color: #000;
      justify-content: space-between;
    }
    p {
      font-size: 0.16rem;
    }
  }
.coment {
  display: flex;
  flex-direction: column;
}
.res {
    height: 100%;
    overflow: auto;
    .result {
    width: auto;
    li {
      display: flex;
      align-items: center;
      height: 0.6rem;
      width: 100%;
      padding: 0 0.15rem  0rem 0.25rem;
      font-size: 0.14rem;
      color: #000;
      justify-content: space-between;
      background-color: rgba(231, 229, 86, 0.096);
    }
    p {
      font-size: 0.16rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 1.7rem;
    }
  }
}
}
.hot {
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.096);
  span {
    margin: 0.05rem 0;
    margin-left: 0.2rem;
  }
}
</style>
