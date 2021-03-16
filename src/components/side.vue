<template>
  <b-col>
      <b-row class="mb-2 cards">
        <b-col cols="2" sm="2" class="p-3 "><opencard v-on:click.native="selected_tab = 'unsolved'" /></b-col>
        <b-col cols="2" sm="2" class="p-3 "><solvedcard v-on:click.native="selectTab('overdue')"/></b-col>
        <b-col cols="2" sm="2" class="p-3 "><newcard v-on:click.native="selectTab('overdueToday')"/></b-col>
        <b-col cols="2" sm="2" class="p-3 "> <open v-on:click.native="selectTab('open')"/></b-col>
        <b-col cols="2" sm="2" class="p-3 "> <unassighned v-on:click.native="selectTab('unsigned')"/></b-col>
        <b-col cols="2" sm="2" class="p-3 "> <onhold v-on:click.native="selectTab('onhold')"/></b-col>
      </b-row>
      <b-row class="mb-2">
        <!-- tabs start -->
        <b-col cols="8" sm="8" class="p-3 ">
         
          <b-tabs>
            <b-tab title="Trends" > <trent/></b-tab>
            <b-tab  title="Unsolved" v-if="selected_tab === 'unsolved'" active><trent/></b-tab>
            <b-tab v-if="selected_tab === 'overdue'" title="Overdue" active> <trent/></b-tab>
            <b-tab v-if="selected_tab === 'overdueToday'" title="Due Today" active> <trent/></b-tab>
            <b-tab v-if="selected_tab === 'open'" title="Open" active> <trent/></b-tab>
            <b-tab v-if="selected_tab === 'unsigned'" title="Unsigned" active> <trent/></b-tab>
            <b-tab v-if="selected_tab === 'onhold'" title="Onhold" active> <trent/></b-tab>
          </b-tabs>
        </b-col>
        <!-- tabs start -->
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
              <b-col cols="8" sm="6"><average/></b-col>
              <b-col cols="4" sm="6"><firsttime/></b-col>
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
import average from "@/components/cards/averageTime.vue";
import firsttime from "@/components/cards/firsttimeResponse.vue";


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
    lower,
    average,
    firsttime
  },
  data(){
    return{
      selected_tab:"halla"
    }
  },
  methods:{
    selectTab: function (tab) {
      this.selected_tab = tab;
    }
  }
}
</script>
<style>



</style>