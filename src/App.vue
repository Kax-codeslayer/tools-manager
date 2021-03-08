<template>

  <div id="app">
    <div class="login-page" v-if="is_logged_in === false">
      <router-view @log_in= "logIn" />
    </div>
    <div class="application" v-if="is_logged_in === true">
      <div id="nav" >
       <supportnav />
    </div>
      <b-row>
      <b-col cols="1.7">
        <div class="sidebar">
          <supportside /> 
        </div>
    </b-col>
     <b-col >
       <div class="main">
         <router-view />
       </div>
    </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import supportnav from "@/components/naavi.vue";
import supportside from "@/components/sidebar/sidebar.vue";



export default {
  name: "App",
  components: {
    supportnav, 
   supportside
      
  },
  data(){
    return{
      is_logged_in: false
    }
  },
  methods:{
    logIn(){
      this.is_logged_in = true
    }
  }

}
</script>

<style>
#app{
  background-color: rgba(247, 247, 247, 0.89);
  overflow: hidden;

}
#nav{
  background-color: #284255!important;
  height: 100px;
  
}
.main{
  height: calc(100vh - 100px);
  overflow: scroll;
}



</style>