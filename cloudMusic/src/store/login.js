// import axios from 'axios'
export default {
  state: {
    // wo
  },
  getters: {
    // 相当于computed
  },
  actions: {
    // wo
    // sendCode ({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     fetch('/daxunxun/users/sendCode?tel=' + this.username)
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data)
    //         commit('sendCodes', data)
    //         resolve()
    //       })
    //   })
    // }
    userlogin ({ commit }, red) {
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/login/cellphone?phone=${red.username}&password=${red.password}`)
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            // commit()
            resolve(data)
          })
      })
    }
  },
  mutations: {
    // wo
    // sendCodes (state, data) {
    //   console.log(data)
    //   this.sendcode = data
    // }
  }
}
