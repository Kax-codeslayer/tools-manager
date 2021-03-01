<template>

 

    
     <b-col  >
       <b-row class="mb-2">
        <b-col cols="2" sm="2" class="p-3 "><opencard/></b-col>
         <b-col cols="2" sm="2" class="p-3 "><solvedcard/></b-col>
          <b-col cols="2" sm="2" class="p-3 "><newcard/></b-col>
          <b-col cols="2" sm="2" class="p-3 "> <open/></b-col>
          <b-col cols="2" sm="2" class="p-3 "> <unassighned/></b-col>
          <b-col cols="2" sm="2" class="p-3 "> <onhold/></b-col>
        
      </b-row>
       <b-row class="mb-2">
        <b-col cols="8" sm="8" class="p-3 "><trent/></b-col>
        <b-col cols="4" sm="4" class="p-3 ">
<b-container fluid class="bv-example-row">
  <b-row>
    <b-col sm="9">
      <H4>Statistics</H4>
      <b-row>
        <b-col cols="8" sm="6"><resolved/></b-col>
        <b-col cols="4" sm="6"><received/></b-col>
      </b-row>
      <b-row>
        <b-col cols="8" sm="6"><resolved/></b-col>
        <b-col cols="4" sm="6"><received/></b-col>
      </b-row>
    </b-col>
  </b-row>
</b-container>
        </b-col>
      </b-row>
      <lower/>
       </b-col>




</template>

<script>
import lower from "@/components/lowerbottom/lower.vue";
import opencard from "@/components/cards/unsolved.vue";
import solvedcard from "@/components/cards/Overdue.vue";
import newcard from "@/components/cards/Duetoday.vue";
import open from "@/components/cards/open.vue";
import onhold from "@/components/cards/Onhold.vue";
import unassighned from "@/components/cards/unassigned.vue";
import trent from "@/components/cards/Trents.vue";
import resolved from "@/components/cards/resolved.vue";
import received from "@/components/cards/received.vue";






export default {
    name: "side",
  components: {
    opencard,
    solvedcard,
    newcard,
    unassighned,
    trent,
    open,
    onhold,
    resolved,
    received,
    lower
    
 
  }
}
</script>
<style>



</style>