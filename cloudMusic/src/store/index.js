import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import login from './login'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home: home,
    login
  }
})

export default store
