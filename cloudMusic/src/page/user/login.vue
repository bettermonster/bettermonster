<template>
  <div class="box">
    <mt-header title="登录">
      <router-link to="/user" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field placeholder="请输入" label="手机号" v-model="username" :state="userState"></mt-field>
    <mt-field v-model="password" type = "password" placeholder="请输入" label="密码" :state="passwordState"></mt-field>
    <button class="login-btn" @click = "userlogins">登录</button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Field, Toast } from 'mint-ui'
Vue.use(Header, Field)
export default {
  data () {
    return {
      username: '15037304711',
      password: 'qwe15037304020'
    }
  },
  computed: {
    userState () {
      var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
      if (this.username === '') {
        return ''
      } else {
        if (phoneReg.test(this.username)) {
          return 'success'
        } else {
          return 'error'
        }
      }
    },
    passwordState () {
      var regx = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/
      if (this.password === '') {
        return ''
      } else {
        if (regx.test(this.password)) {
          return 'success'
        } else {
          return 'error'
        }
      }
    }
  },
  methods: {
    userlogins () {
      if (this.userState === 'success' && this.passwordState === 'success') {
        const that = this
        console.log(that.username)
        // this.$store.dispatch('userlogin', {username: that.username, password: that.password}).then((dat) => {
        // console.log(dat)
        var dat = {
          code: 200
        }
        if (dat.code === 200) {
          Toast('登陆成功')
          localStorage.setItem('userId', '365108702')
          this.$router.push('/')
        } else {
          Toast('密码或手机号不正确')
        }
        // })
      } else {
        Toast('密码或手机号格式不正确')
      }
    }

  }
}
</script>

<style scoped>
.mint-header {
  background-color: #d43c33;
}
.login-btn {
  width: 94%;
  margin-left: 3%;
  margin-top: 0.30rem;
  height: 0.40rem;
  background: #d43c33;
  font-size: 0.18rem;
  color: #ecd9ff;
  outline: none;
  border: none;
  border-radius: 0.40rem;
}
</style>
