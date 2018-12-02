export default {
  state: {
    banner: []
  },
  getters: {
    // 计算属性
  },
  actions: {
    // 异步操作，请求数据
    getBanner ({commit}) {
      fetch('http://localhost:3000/banner')
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          // this.item = data.banners
          commit('changeBanner', data.banners)
        })
    }
  },
  mutations: {
    // 唯一改变数据源的方式，可在action中调用。
    changeBanner (state, data) {
      state.banner = data
    }
  }
}
