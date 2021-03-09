<template>
  <div>
    <b-nav tabs align="left">
      <b-icon icon="person-bounding-box"></b-icon><b-nav-item> <router-link to="/" class ="iterms"> <b-icon icon="person-bounding-box"></b-icon>    Admin</router-link></b-nav-item>  
    </b-nav>
  </div>
</template>

<script>
export default {
  methods:{
         logOut(){
          this.$emit("log_out");
      }
  }
}
</script>

<style>
.iterms{
  color:white;
}
</style>