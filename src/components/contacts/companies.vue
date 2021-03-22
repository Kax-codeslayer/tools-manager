
 <!--<template>

<div>

    <div class="text-center">
    
    
</div>
  <b-table-simple hover small caption-top responsive>
    
    <colgroup><col><col></colgroup>
    <colgroup><col><col><col></colgroup>
    <colgroup><col><col></colgroup>
    
    
      <b-tr>
        <b-th>Company</b-th>
        <b-th>Region</b-th>
        <b-th>Address</b-th>
        <b-th>Contact</b-th>
        <b-th>Email</b-th>
        
      </b-tr>
    
    <b-tbody>
      <b-tr>
          
        <b-th rowspan="3">  
            
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>Zesa</b-th>
        <b-th class="text-right">Southern region</b-th>
        <b-td>Harare</b-td>
        <b-td>0784315526</b-td>
        <b-td>kiki@gmail</b-td>
        <b-td><b-icon-pencil-square variant="success" v-b-popover.hover="'Edit'" title="Popover Title"></b-icon-pencil-square><b-icon-trash-fill variant="danger" v-b-popover.hover="'Delete'" title="Popover Title"></b-icon-trash-fill></b-td>
        
      </b-tr>
      <b-tr>
        <b-th class="text-right">Northern Region</b-th>
        <b-td>harare</b-td>
        <b-td >0775443224</b-td>
        <b-td>love@gmail</b-td>
        <b-td><b-icon-pencil-square variant="success" v-b-popover.hover="'Edit'" title="Popover Title"></b-icon-pencil-square><b-icon-trash-fill variant="danger" v-b-popover.hover="'Delete'" title="Popover Title"></b-icon-trash-fill></b-td>
        
      </b-tr>
     
      
      <b-tr>
        <b-th class="text-right">Eastern region</b-th>
        <b-td>Harere</b-td>
        <b-td >0242666</b-td>
        <b-td>itrack@gmail</b-td>
        <b-td><b-icon-pencil-square variant="success" v-b-popover.hover="'Edit'" title="Popover Title"></b-icon-pencil-square><b-icon-trash-fill variant="danger" v-b-popover.hover="'Delete'" title="Popover Title"></b-icon-trash-fill></b-td>
        
      </b-tr>
    </b-tbody>
    <b-tfoot>
      <b-tr>
        <b-td colspan="7" variant="secondary" class="text-right">
          Total Rows: <b>4</b>
        </b-td>
      </b-tr>
    </b-tfoot>
  </b-table-simple>
</div>

    
</template> 
<template>
  <div id="app">
<V-table class="table" :filters="filters">
  <thead>
    <tr>
      <th></th>
      <th><strong>Company Name</strong></th>
      <th><strong>Region</strong></th>
      <th><strong>Address</strong></th>
      <th><strong>Contact</strong></th>
      <th><strong>Email</strong></th>
      
      

      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in rows" :key="row">
      <td><b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox></td>
      <td><input type="text" v-model="row.name"></td>
      <td><input type="text" v-model="row.region"></td>
      <td><input type="text" v-model="row.address"></td>
      <td><input type="text" v-model="row.contact"></td>
      <td><input type="text" v-model="row.email"></td>
      
      
      <td><a @click="deleteTableRow(row)"><b-icon-trash-fill variant="danger" v-b-popover.hover="'Delete'" title="Popover Title"></b-icon-trash-fill></a></td>
    </tr>
  </tbody>
</V-table>
<div >
  <button class="button btn-primary" @click="addRow()">Add Contact</button>
</div>
</div>
</template>

<script>
export default {

  data: function() {
    return{
    rows: [
      {name: "Zesa",region: "Southern",address: "Highglen",contact: "0242 3456",email: "Christa@gmail.com"},
      {name: "Itrack",region: "Southern",address: "Highglen",contact: "0242 3456",email: "Christa@gmail.com"},
      {name: "Ackwell",region: "Southern",address: "Highglen",contact: "0242 3456",email: "Christa@gmail.com"},
      {name: "Chrystal",region: "Southern",address: "Highglen",contact: "0242 3456",email: "Christa@gmail.com"},
      
    ],
    
    }
  },
  methods:{
    addRow: function(){
      this.rows.push({name:"",region:"",address:"",contact:"",email:""});
    },
    //removeRow: function(row){
      //console.log(row);
      //this.rows.$remove(row);
    //}

    deleteTableRow: function (idx) { 
      
      this.rows.splice(idx, 1);      
   }
  }

}
</script> -->

<template>
    <div id="app">
      <router-link to="/home" class ="iterms"> <b-icon icon="x-circle" scale="1.5" variant="danger" id="back" v-b-popover.hover="'Exit'"></b-icon></router-link>
        <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config">
        </vue-bootstrap4-table>
    </div>
</template>
<script>
import VueBootstrap4Table from 'vue-bootstrap4-table'

export default {
    name: 'App',
    data: function() {
        return {
            rows: [{
                    "Name": "Zesa",
                    "region":"Southern",
                    "contact": {
                        "contact_name": "0778 552 441"
                       
                    },
                    "address": {
                        "country": "Harare Zimbabwe "
                    },
                    "email": "zesa.@gmail.com",
                },
                {
                    "Name": "Praz",
                    "region":"Southern",
                    "contact": {
                        "contact_name": "0774 345 336"
                        
                    },
                    
                    "address": {
                        "country": "lokinva harare zim"
                    },
                    "email": "mpraz@itrack.biz",
                },
                {
                    "Name": "Zupco",
                    "region":"Southern",
                    "contact": {
                        "contact_name": "0778 554 336",
                        
                    },
                    "address": {
                        "country": "Harare Zim Kuwadzana "
                    },
                    "email": "zupco.mkumbuzi@itrack.com",
                }],
            columns: [{
                    label: "Company Name",
                    name: "Name",
                    filter: {
                        type: "simple",
                        placeholder: "Name"
                    },
                    sort: true,
                },
{
                    label: "Region",
                    name: "region",
                    filter: {
                        type: "simple",
                        placeholder: "Region"
                    },
                    sort: true,
                },



                {
                    label: "Contact",
                    name: "contact.contact_name",
                    filter: {
                        type: "simple",
                        placeholder: "Enter Contact"
                    },
                    sort: true,
                },
                {
                    label: "Email",
                    name: "email",
                    sort: true,
                },
                {
                    label: "Address",
                    name: "address.country",
                    filter: {
                        type: "simple",
                        placeholder: "Enter address"
                    },
                }],
            config: {
                checkbox_rows: true,
                rows_selectable: true,
                card_title: "Company Contacts"
            }
        }
    },
    components: {
        VueBootstrap4Table
    }
}
</script>

<style>
#app{
  margin-top: 10px;
}
#back{
  margin-left: 98%;
  margin-top: 2px;
}

</style>




