<template>
  <div id='Login'>
    <router-link to="/"><div id="login-logo"><img src="../../assets/images/login/logo.png" alt=""></div></router-link>
    <form autocomplete="off" id="loginBox" @submit.prevent="onSubmit">
      <div id="login-user"><input type="text" placeholder="请输入您的用户名" id="userName" v-model="user.name"></div>
      <div id="login-psd"><input type="password" placeholder="请输入您的密码" id="userPsd" v-model="user.psd"></div>
      <button id="login-btn" @click="Login()">登 陆</button>
      <p id="login-kf">首次登陆请联系<span>在线客服</span>获取密码</p>
      <img src="../../assets/images/Login/shadow.png" alt="" id="login-shadow">
    </form>
  </div>
</template>

<script>
import {LoginApi} from '@/axios/api'
export default {
  data () {
    return {
      user: {
        name: '',
        psd: ''
      }
    }
  },
  methods: {
    onSubmit () {
      return false
    },
    Login () {
      let _that = this
      // 传送参数，发送请求之前，先做判断
      // 当用户名或者密码为空时
      if (_that.user.name === '' || _that.user.psd === '') {
        this.errorMsg('账号或密码不能为空', 5000)
      } else {
        const userMsg = {
          username: _that.user.name,
          password: _that.user.psd
        }
        _that.LoginPost(userMsg) // 传参数
      }
    },
    LoginPost (p) {
      LoginApi(p).then(res => {
        // 账号密码正确，登陆成功时
        localStorage.setItem('token', res.key) // 将token 存入localStorage
        this.$router.push('/')
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        // 后台判断账号密码错误时
        this.errorMsg('账号或密码错误，请重新输入', 5000)
        this.user.psd = ''
      })
    },
    errorMsg (msg, time) {
      this.$notify({
        message: msg,
        type: 'warning',
        duration: time
      })
    }
  }
}
</script>

<style>
#Login{
  height: 100vh;
  position: relative;
  margin-top: -2.75rem;
  background: url("../../assets/images/login/background.png")
}

#login-logo {
  width: 100%;
  position: absolute;
  top: 10%;
  text-align: center
}

#loginBox {
  position: absolute;
  top: 30%;
  width: 100%;
}

#login-user {
  background: url("../../assets/images/login/YH.png") no-repeat
}

#login-psd {
  background: url("../../assets/images/login/Mm.png") no-repeat
}
#login-user,#login-psd {
  width: 85%;
  height: 1.5rem;
  border-bottom: 1px solid #ffffff;
  text-align: left;
  margin: 50px auto 50px auto
}
#login-user>input,#login-psd>input {
  border: none;
  color: #ffffff;
  margin-left: 35px;
  background: transparent;
}

#login-btn {
  width: 85%;
  height: 2.5rem;
  border: none;
  box-sizing: border-box;
  border-radius: 3px;
  color: #000;
  font-weight: 600;
  background:linear-gradient(rgba(255, 225, 141, 1),rgba(229, 171, 33, 1))
}

#login-kf {
  margin: 25px 0
}
#login-kf>span {
  color: rgba(181, 128, 36, 1);
}
#login-shadow {
  width: 100%;
}
</style>
