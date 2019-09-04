<template>
  <div>
      <Header :back="true">
          <template>
             <p>投票</p>
             <span>发起投票</span>
          </template>
      </Header>
  </div>
</template>

<script>
import httpAxios from '@/utils/http.js'
export default {
    data() {
        return {
            
        }
    },
    created(){
        httpAxios.get('/api/vote/allVote').then((res)=>{
            console.log(res);
        });
    }
}
</script>

<style>

</style>