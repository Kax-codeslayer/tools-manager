<template>
    <div class="dashboard">
        <div id="nav">
            <supportnav @togle-sidebar="togleSidebar" />
        </div>
            <b-row>
            <b-col v-if="sidebar_show" cols="2">
                <supportside /> 
            </b-col>
            <b-col class="main">
                <router-view />
            </b-col>
        </b-row>
        </div>
</template>

<script>
import supportnav from "@/components/naavi.vue";
import supportside from "@/components/sidebar/sidebar.vue";
export default {
      components: {
     supportnav, 
     supportside
  },
 data(){
     return{
         sidebar_show:true
     }
 },
 methods:{
     togleSidebar(){
        if(this.sidebar_show){
           this.sidebar_show = false 
        } else{
            this.sidebar_show = true 
        }
     }
 }
}
</script>

<style scoped>
    #nav{
  background-color: #284255!important;
  height: 100px;
    }
    .main{
        height: calc(100vh - 100px);
        overflow-y:scroll;
    }
</style>