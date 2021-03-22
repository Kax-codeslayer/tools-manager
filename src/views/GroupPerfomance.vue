<template>
<div>
      <b-card
      
  id="helpdesk"
      
    >
      <b-card-text> 
        <router-link to="/report" class ="iterms"> <b-icon icon="x-circle" scale="1.5" variant="danger" id="back" v-b-popover.hover="'Exit'"></b-icon></router-link>
        <h3> Group Perfomance</h3>
        <small>Last Updated 30 minutes ago</small>


      </b-card-text>
      <b-row>
        <b-col cols="1">
      <b-button href="#" variant="primary"> Filter</b-button>
      </b-col>
      <b-col> <p> <small>Filter by: Time Period: </small> <b> 7 Feb, 2021- 9 Feb 2021 </b></p></b-col>
      </b-row>
    </b-card>

<div id="agentTable">
    <mdb-tbl bordered>
          <mdb-tbl hover>
      <mdb-tbl-head color="grey">
        <tr>
          <th>Group</th>
          <th>Tickets Assigned</th>
          <th>Tickets Resolved</th>
          <th>Tickets Reopened</th>
          <th>Tickets Reassigned</th>
          <th>First Response SLA%</th>
        </tr>
      </mdb-tbl-head>
      <mdb-tbl-body>
        <tr>
          <th>Admin</th>
          <td>20</td>
          <td>20</td>
          <td>10</td>
          <td>5</td>
          <td>100%</td>
        </tr>
        <tr>
          <th>Finance</th>
          <td>100</td>
          <td>50</td>
          <td>50</td>
          <td>10</td>
          <td>100%</td>
        </tr>
         <tr>
          <th>Support</th>
          <td>20</td>
          <td>2</td>
          <td>5</td>
          <td>3</td>
          <td>50%</td>
        </tr>

         <tr>
          <th>Software Development</th>
          <td>10</td>
          <td>5</td>
          <td>5</td>
          <td>3</td>
          <td>20%</td>
        </tr>

         <tr>
          <th>Marketing</th>
          <td>400</td>
          <td>300</td>
          <td>200</td>
          <td>10</td>
          <td>90%</td>
        </tr>
         
      </mdb-tbl-body>
    </mdb-tbl>
     </mdb-tbl>
  </div>


</div>

</template>

<script>
  import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
  export default {
    name: 'TablePage',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    }
  }
</script>
<style scoped>
#agentTable{
    margin: 20px;
    background: white;
}
</style>