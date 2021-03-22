<template>
<div>
      <b-card
      
  id="helpdesk"
      
    >
      <b-card-text> 
        <router-link to="/report" class ="iterms"> <b-icon icon="x-circle" scale="1.5" variant="danger" id="back" v-b-popover.hover="'Exit'"></b-icon></router-link>
        <h3> Agent Perfomance</h3>
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
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Received Tickets</th>
          <th>Resolved Tickets</th>
          <th>Unresolved Tickets</th>
        </tr>
      </mdb-tbl-head>
      <mdb-tbl-body>
        <tr>
          <th>1</th>
          <td>Mark</td>
          <td>Chinya</td>
          <td>10</td>
          <td>7</td>
          <td>3</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Cristiano</td>
          <td>Roo</td>
          <td>20</td>
          <td>10</td>
          <td>10</td>
        </tr>
         <tr>
          <th>2</th>
          <td>florence</td>
          <td>MEki</td>
          <td>12</td>
          <td>10</td>
          <td>2</td>
        </tr>

         <tr>
          <th>2</th>
          <td>MImie</td>
          <td>Ruvangwe</td>
          <td>5</td>
          <td>3</td>
          <td>2</td>
        </tr>

         <tr>
          <th>2</th>
          <td>Ruvarashe</td>
          <td>Mututwa</td>
          <td>11</td>
          <td>10</td>
          <td>1</td>
        </tr>
         <tr>
          <th>6</th>
          <td>Kiiki</td>
          <td>CEE</td>
          <td>12</td>
          <td>10</td>
          <td>2</td>
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