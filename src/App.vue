<template>

  <div id="app">
    <div id="nav">
    <supportnav/>
    </div>
      <b-row>
      <b-col cols="1.7">
        <div class="sidebar">
          <supportside/> 
        </div>
    </b-col>
     <b-col >
       <div class="main">
         <router-view />
       </div>
    </b-col>
      </b-row>
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
      
  }
}
</script>

<style>
#app{
  background-color: rgba(247, 247, 247, 0.89);
  overflow: hidden;

}
#nav{
  background-color: rgb(9, 9, 82);
  height: 100px;
  
}
.main{
  height: calc(100vh - 100px);
  overflow: scroll;
}



</style>