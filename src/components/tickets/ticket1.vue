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
        <h2> <b-badge>K</b-badge></h2>
    </b-col>
    <b-col cols="7">
        <b-badge v-if="status === 'Unsolved'" variant= "light">{{status}}</b-badge>
        <b-badge v-else-if="status === 'Unsigned'" variant= "secondary">{{status}}</b-badge>
        <b-badge v-else-if="status === 'Open'" variant= "success">{{status}}</b-badge>
        <b-badge v-else-if="status === 'Overdue'" variant= "danger">{{status}}</b-badge>
        <b-badge v-else-if="status === 'Due today'" variant= "warning">{{status}}</b-badge>
        <b-badge v-else-if="status === 'Onhold'" variant= "primary">{{status}}</b-badge>
        
        <h6 ><router-link to="ticketsolve" id="my-nav-dropdown" style="color:black" v-b-popover.hover="{title:'Elvin Kakokmo', content:'My vehicle have been offline for a while'}" >Vehicle offline</router-link></h6>
       <p>{{name}} .<small>Created 5 days ago</small> .<small>Due in 2 days</small></p>

        
    </b-col>
    <b-col>  <b-badge variant="success">New</b-badge>  </b-col>
    </b-row>
  </b-card-text>     
</template>
<script>
export default {
  props: ['status','name']
}
</script>
<style>
.ticket-card{
  border: limegreen 1px solid;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  margin-right: 1rem;
  max-height: 150px;

}
#checkbox-1{
  margin-top: 8rem!important;

}
</style>