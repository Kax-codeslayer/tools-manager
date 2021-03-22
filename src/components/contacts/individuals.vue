
<!--<template>


  <div>

    <div class="text-center">
    
    
</div>
  <b-table-simple hover small caption-top responsive>
    
    <colgroup><col><col></colgroup>
    <colgroup><col><col><col></colgroup>
    <colgroup><col><col></colgroup>
    
    
      <b-tr>
        <b-th>First Name</b-th>
        <b-th>Last Name</b-th>
        <b-th>Address</b-th>
        <b-th>Contact</b-th>
        <b-th>Email</b-th>
        
      </b-tr>
    
    <b-tbody>
      <b-tr>
          
        <b-td rowspan="">  
            
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>Christa</b-td>
        
        <b-td>H</b-td>
        <b-td>Harare</b-td>
        <b-td>70000</b-td>
        <b-td >kiki@gmail</b-td>
       <b-td><b-icon-pencil-square variant="success" v-b-popover.hover="'Edit'" title="Popover Title"></b-icon-pencil-square><b-icon-trash-fill variant="danger" v-b-popover.hover="'Delete'" title="Popover Title"></b-icon-trash-fill></b-td>
        
      </b-tr>

      
      <b-tr>
          
        <b-td rowspan="">  
            
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>Elvin</b-td>
        
        <b-td>Harare</b-td>
        <b-td>0784315526</b-td>
        <b-td>kiki@gmail</b-td>
        <b-td>72</b-td>
        <b-td><b-icon-pencil-square variant="success" v-b-popover.hover="'Edit'" title="Popover Title"></b-icon-pencil-square><b-icon-trash-fill variant="danger" v-b-popover.hover="'Delete'" title="Popover Title"></b-icon-trash-fill></b-td>
        
      </b-tr>
      
      <b-tr>
          
        <b-td rowspan="">  
            
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>Kiki</b-td>
        
        <b-td>Harare</b-td>
        <b-td>0784315526</b-td>
        <b-td>kiki@gmail</b-td>
        <b-td>kiki@gmail</b-td>
        <b-td><b-icon-pencil-square variant="success" v-b-popover.hover="'Edit'" title="Popover Title"></b-icon-pencil-square><b-icon-trash-fill variant="danger" v-b-popover.hover="'Delete'" title="Popover Title"></b-icon-trash-fill></b-td>
        
      </b-tr>
    </b-tbody>
   
  </b-table-simple>
</div> 


    
</template>
<template>

  <div id="tabb">

    <input type="text" placeholder="Search by  or employee" v-model="filter" />
  <table>
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in filteredRows" :key="`employee-${index}`">
        <td v-html="highlightMatches(row.firstname)"></td>
        <td v-html="highlightMatches([...row.lastname].sort().join(', '))"></td>
         <td v-html="highlightMatches(row.firstname)"></td>
        <td v-html="highlightMatches([...row.lastname].sort().join(', '))"></td>
        <td v-html="highlightMatches(row.firstname)"></td>
         
      </tr>
      
    </tbody>
  </table>

  
</div>
</template>
<script>
   export default{
  
  data (){ return{
    filter: "",
    rows: [
      { firstname: "Christabel", lastname: ["Chings"] },
      {
        firstname: "Elvishto",
        lastname: ["Juarez"],
        
      },
      {
        firstname: "ALVIN",
       lastname: ["Sweeney"]
      },
      {
       firstname: "Munhu",
        lastname: ["Lambert"]
      },
      {
        firstname: "mimie",
        lastname: ["Prince"]
      }
    ]
  }
  },
  methods: {
    highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    }
  },
  computed: {
    filteredRows() {
      return this.rows.filter(row => {
        const lastname = row.lastname.toString().toLowerCase();
        const firstname = row.firstname.toLowerCase();
        
        const searchTerm = this.filter.toLowerCase();

        return (
          firstname.includes(searchTerm) || lastname.includes(searchTerm)
        );
      });
    }
  }
};

</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #dddddd;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid lawngreen;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 25px;
}
</style> -->
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
                    "Name": "Christabel Chinyanganya",
                    "contact": {
                        "contact_name": "0778 552 441"
                       
                    },
                    "address": {
                        "country": "Harare Zimbabwe Budiriro"
                    },
                    "email": "kiki.chinya@gmail.com",
                },
                {
                    "Name": "Milliet Mukonoweshuro",
                    "contact": {
                        "contact_name": "0774 345 336"
                        
                    },
                    
                    "address": {
                        "country": "lokinva harare zim"
                    },
                    "email": "mlittle@itrack.biz",
                },
                {
                    "Name": "Rumbi",
                    "contact": {
                        "contact_name": "0778 554 336",
                        
                    },
                    "address": {
                        "country": "Harare Zim Kuwadzana "
                    },
                    "email": "rumbi.mkumbuzi@itrack.com",
                }],
            columns: [{
                    label: "Name",
                    name: "Name",
                    filter: {
                        type: "simple",
                        placeholder: "Name"
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
                card_title: "Individual Contacts"
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

