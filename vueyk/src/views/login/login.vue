<template>
  <div>
      <input placeholder="请输入账号" v-model="name">
      <input placeholder="请输入密码" v-model="pwd">
      <button @click="login">登录</button>
  </div>
</template>

<script>
import '@/mock/index'
export default {
  data() {
    return {
      name:'',
      pwd:''
    }
  },
  methods: {
    login(){
      this.$http.post('/api/login',{name:this.name,pwd:this.pwd}).then((res)=>{
        // console.log(res);
        if(res.data.code === 1){
          window.localStorage.userId = this.name;
          console.log(this.$route);
          let redirect = this.$route.query.redirect;
          if(redirect){
            this.$router.push({path:redirect});
          } else {
            this.$router.push({path:'/index/home'});
          }
        }
      });
    }
  },
}
</script>

<style>

</style>