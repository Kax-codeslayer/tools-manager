<template>

        <b-col cols="1.7" id ="inner" >
      
      
      <b-row class="mb-1">
        <b-col cols="12" sm="12" class="p-3 "><link1/></b-col>
        
      </b-row>
      
      <b-row class="mb-1">
        <b-col cols="12" sm="12" class="p-3 "> <link2/></b-col>
        
      </b-row>
      <b-row class="mb-1">
        <b-col cols="12" sm="12" class="p-3 ">  <link3/></b-col>
        
      </b-row>
      <b-row class="mb-1">
        <b-col cols="12" sm="12" class="p-3 "><link4/></b-col>
        
      </b-row>


<b-row class="mb-2">
        <b-col cols="12" sm="12" class="p-3 "><link5/></b-col>
        
      </b-row>
    </b-col>
    
</template>
<script>
import link1 from "@/components/links/dashboard.vue";
import link2 from "@/components/links/tickets.vue";
import link3 from "@/components/links/contact.vue";
import link4 from "@/components/links/reports.vue";
import link5 from "@/components/links/admin.vue";

export default {
    name:"sidebar",
    components: {
    link1,
    link2,
    link3,
    link4,
    link5
 
  }
    
}
</script>
<style>
#inner{
  background-color: rgb(36, 36, 77) !important;
  margin-left: 0.1in;
  height: calc(100vh - 100px);
}
</style>