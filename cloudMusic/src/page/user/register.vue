<template>
  <div class="box">
    <mt-header title="注册">
      <router-link to="/user" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field placeholder="请输入" label="手机号" v-model="username" :state="userState"></mt-field>
    <mt-field label="验证码" v-model="code">
      <div @click='sendCode'>发送验证码</div>
    </mt-field>
    <mt-field v-model="password" placeholder="请输入" label="密码" :state="passwordState"></mt-field>
    <mt-field v-model="repassword" placeholder="请确认密码" :label="placeholder" :state="repasswordState"></mt-field>
    <button class="login-btn" @click = "register">注册</button>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Header, Field, Toast } from 'mint-ui'
Vue.use(Header, Field)
export default {
  data () {
    return {
      username: '',
      code: '',
      password: '',
      repassword: '',
      placeholder: '密码',
      adminCode: ''
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
    },
    repasswordState () {
      const that = this
      if (this.repassword === '') {
        return ''
      } else {
        if (this.repassword === this.password) {
          that.placehsolder = '密码一致'
          return 'success'
        } else {
          that.placeholder = '密码不一致'
          return 'error'
        }
      }
    },
    codeState () {
      if (this.code === '') {
        return ''
      } else {
        if (this.code === this.adminCode) {
          return 'success'
        } else {
          return 'error'
        }
      }
    }
  },
  methods: {
    sendCode () {
      if (this.userState === 'success') {
        fetch('/daxunxun/users/sendCode?tel=' + this.username)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data === 0) {
              // 发送短信验证码失败
              Toast('发送短信验证码失败')
            } else if (data === 1) {
              // 已经注册
              Toast('该手机号已经注册')
            } else {
              // 发送短信验证码成功
              Toast('发送短信验证码成功')
              this.adminCode = data.code
            }
          })
      } else {
        Toast('请输入正确手机号')
      }
    },
    back () {
      this.$router.go(-1)
    },
    register () {
      if (this.userState === 'success' && this.passwordState === 'success' && this.repasswordState === 'success') {
        console.log(333)
        axios.post('/daxunxun/users/register', {
          username: this.username,
          password: this.password
        })
          .then(data => {
            console.log(data)
            if (data.data === 1) {
              Toast('注册成功')
              this.$router.go(-1)
            } else if (data.data === 2) {
              Toast('该手机已被注册')
            } else {
              Toast('请重试')
            }
          })
      } else {
        Toast('请书写完整')
      }
    }
  }
  // methods: {
  //   sendCode () {
  //     this.$store.dispatch('sendCode').then(() => {
  //       console.log(data)
  //       if (data === 0) {
  //         // 发送短信验证码失败
  //         Toast('发送短信验证码失败')
  //       } else if (data === 1) {
  //         // 已经注册
  //         Toast('该手机号已经注册')
  //       } else {
  //         // 发送短信验证码成功
  //         Toast('发送短信验证码成功')
  //         this.code = data
  //       }
  //     })
  //   }
  // }
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
