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
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Assign</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Close</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Delete</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Spam</b-button></b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      
    </b-collapse>
  </b-navbar>
</div>
<b-row>
  <b-col cols="9">
    <tick/> 
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
    }
}
</script>
<style>
.nav2{
    background: white!important;
    margin-top: 0.9rem;
}
</style>