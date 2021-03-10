
<template>
 <b-card-text class="ticket-card">
  <b-row  align-v="center">
   <b-col cols="1">
      <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>            
  </b-col>
    <b-col cols="1"> 
        <h2> <b-badge>C</b-badge></h2>
    </b-col>
    <b-col cols="5"> 
        
        <h6 ><router-link to="ticketsolve" id="my-nav-dropdown" style="color:black" v-b-popover.hover="{title:'Elvin Kakokmo', content:'My vehicle have been offline for a while'}" >I neeed a New Installation</router-link></h6>
        <p>Christabel .<small>Created 8 days ago</small> .<small>Due in 1 days</small></p>
    </b-col>
    <b-col><b-badge variant="success">New</b-badge></b-col>
    </b-row>
  </b-card-text>     
</template>
<style>
.ticket-card{
  border: limegreen 1px solid;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  margin-right: 1rem;

}
#checkbox-1{
  margin-top: 8rem!important;

}
</style>