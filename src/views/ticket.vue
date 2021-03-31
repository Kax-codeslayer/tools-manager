<template>
<div class="text-left">
    <b-card>
  <b-row>
<b-col cols="2">
    <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
    >
       </b-form-checkbox>
</b-col>  
 <b-col cols="10">
    <b-dropdown id="dropdown-1" text="Assign" class="m-md-2" variant="outline-success">
    <b-dropdown-item>Support</b-dropdown-item>
    <b-dropdown-item>Finance</b-dropdown-item>
    <b-dropdown-item>Admin</b-dropdown-item>
    <b-dropdown-item>Marketing</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
   
  </b-dropdown>

    <b-navbar-brand><b-button variant="outline-success" class="m-md-2" type="submit">Close</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Delete</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Spam</b-button></b-navbar-brand>
 </b-col> 
 <b-col cols="1">
     <router-link to="/home" class ="iterms"> <b-icon icon="x-circle" scale="1.5" variant="danger" id="back" v-b-popover.hover="'Exit'"></b-icon></router-link>
  
 
 </b-col>


</b-row>
</b-card>
<b-row>
  <b-col cols="9" id="ticketing">
    <ul>
      <li v-for="ticket in data" :key="ticket.id">
         <tick :name="ticket.name"/> 
      </li>
    </ul>
  </b-col>
  <b-col>
    
    <tfilter />
  </b-col>
</b-row>
</div>
    
</template>
<script>

import tick from "@/components/tickets/ticket1.vue";
import tfilter from "@/components/tickets/ticket-filter.vue";
export default {
    name:"ticket",
    components:{
        tick,
        tfilter
    },
    data(){
      return{
        data:[], 
      }
    },
     beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('http://itrackdevs.geo-fuel.com/tools_manager_api/getAllmail.php');
      const data = await res.json();
      this.data = data;
    }
  }
}
</script>
<style >


.nav2{
    background: white!important;
    margin-top: 0.9rem;
}
#ticketing{
  max-height: 500px;
  
  overflow-y: scroll;
}
#back{
  margin-left: 98%;
  margin-top: 2px;
}
</style>