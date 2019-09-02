<template>
  <div>
      <Item :item="$route.query">
        <template v-slot:last>
          <h3 @click="goToBook">书架</h3>
        </template>
      </Item>
  </div>
</template>

<script>
import Item from '@/components/item'
export default {

  data() {
    return {
      
    }
  },
  components:{
    Item
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    goToBook(){
      console.log('去书架');
      this.$router.push({name:'book'})
    }
  },
}
</script>

<style>

</style>