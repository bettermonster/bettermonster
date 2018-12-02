<template>
  <div class="mvstart">
    <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
      <min-header></min-header>
      <div class="videobo"><video controls="controls" name="media" autoplay="autoplay" :src="mvid"></video></div>
      <div class="jjb">
        <div class="videodec">
          <dl>
            <dt><p>{{ list.name }}</P>演唱:{{ list.artistName }} 发布时间: {{ list.publishTime }}</dt>
            <dd>{{ list.desc }}</dd>
          </dl>
        </div>
        <div class="hotsay">
          热门评论
        </div>
        <div class="usersay">
          <dl v-for="lis in pinglun" :key="lis.id">
            <dt>
              <h3>
                <p>
                  <span><img :src="lis.user.avatarUrl" alt=""></span>
                  <strong>{{ lis.user.nickname }}</strong>
                </p>
                <!-- <i v-if="!admire" class="iconfont icon-dianzan00" @click="changeicon()"></i> -->
                <!-- <i v-else class="iconfont icon-dianzantianchong-" @click="changeicon"></i> -->
              </h3>
            </dt>
            <dd>{{lis.content}}</dd>
          </dl>
        </div>
      </div>
    <!-- </mt-loadmore> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { Loadmore } from 'mint-ui'
Vue.use(Loadmore)
export default {
  data () {
    return {
      ico: 'icon-dianzan00',
      mvid: '',
      list: {},
      pageNum: 0,
      pinglun: [],
      allLoaded: false
      // admire: local_admire
    }
  },
  methods: {
    // changeicon () {
    //   this.admire==false?this.admire=true:this.admire=false
    //   localStorage.setItem('admire',this.admire)
    // }
    // loadTop () {
    //   fetch(`http://localhost:3000/comment/mv?id=${this.$route.query.id}&offset=1`)
    //     .then(res => res.json())
    //     .then(dataed => {
    //       this.pinglun = dataed
    //       this.pageNum = 1
    //       this.allLoaded = false
    //       this.$refs.loadmore.onTopLoaded()
    //     })
    // },
    // loadBottom () {
    //   fetch(`http://localhost:3000/comment/mv?id=${this.$route.query.id}&limit=${20}`)
    //     .then(res => res.json())
    //     .then(da => {
    //       console.log(da)
    //       if (da.length === 0) {
    //         this.allLoaded = true
    //         Toast('已无更多数据')
    //       } else {
    //         this.pageNum++
    //         this.pinglun = [...this.pinglun, ...da.comments]
    //       }
    //       console.log(this.pinglun)
    //       this.$refs.loadmore.onBottomLoaded()
    //     })
    // }
  },
  mounted () {
    // var local_admire = localStorage.getItem('admire')
    // this.admire = local_admire
    fetch(`http://localhost:3000/mv/url?id=${this.$route.query.id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.mvid = data.data.url
      })
    fetch(`http://localhost:3000/mv/detail?mvid=${this.$route.query.id}`)
      .then(res => res.json())
      .then(datas => {
        console.log(datas)
        this.list = datas.data
      })
    fetch(`http://localhost:3000/comment/hot?id=${this.$route.query.id}&type=1`)
      .then(res => res.json())
      .then(d => {
        console.log(d.hotComments)
        this.pinglun = d.hotComments
      })
  },
  components: {
    'min-header': () => import('@/components/minheader')
  }
}
</script>

<style scoped lang="scss">
.mvstart {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
video {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  margin: auto;
  margin-top: 0.01rem;
}
.hotsay {
  height: 0.55rem;
  flex-shrink: 0;
  border-bottom: 1px solid #ccc;
  line-height: 0.55rem;
  padding-left: 0.05rem;
  font-size: 0.18rem;
  font-weight: 600;
}
.videobo {
  flex-shrink: 0;
}
.videodec {
  flex-shrink: 0;
}
.jjb {
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;
  height: 100%;
  .usersay {
    height: auto;
    dl {
      height: auto;
      padding: 0.05rem 0.05rem 0.05rem 0.06rem;
      border-bottom: 0.01rem solid #ccc;
    }
    h3 {
      width: 100%;
      height: 0.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: rgb(41, 37, 37);
    }
    img {
        height: 0.46rem;
        width: auto;
        margin-right: 0.10rem
      }
  }
}
</style>
