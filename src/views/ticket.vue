<template>
<div class="text-center">
    <div>
  <b-navbar toggleable="sm"  class="nav2">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      
       
<b-navbar-brand>
    <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
    >
       </b-form-checkbox>
       </b-navbar-brand>
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
    

  
  </b-navbar>
</div>
<b-row>
  <b-col cols="9" id="ticketing">
    <tick/>
    <tick2/>
    <tick/>
  </b-col>
  <b-col>
    
    <tfilter />
  </b-col>
</b-row>
</div>
    
</template>
<script>
import tick2 from "@/components/tickets/ticket2.vue";
import tick from "@/components/tickets/ticket1.vue";
import tfilter from "@/components/tickets/ticket-filter.vue";
export default {
    name:"ticket",
    components:{
        tick,
        tick2,
        tfilter
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

</style>