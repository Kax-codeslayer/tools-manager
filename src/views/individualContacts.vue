<template>
<div>
  <div id="bar">
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
   <div>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar>
</div>
    <b-collapse id="nav-text-collapse" is-nav>
      
    </b-collapse>
  </b-navbar>
</div>



 <b-row>
   <b-col cols="9">
<individual/>
   </b-col>
   <b-col>
     <filters />
   </b-col>
</b-row>
</div>
</template>

<script>
import individual from "@/components/contacts/individuals.vue";
import filters from "@/components/contacts/individuals-filter.vue";

export default {
  name:"comContacts",
  components:{
  individual,
  filters
  }
}
</script>
<style>
#bar{
background: white;
}
</style>