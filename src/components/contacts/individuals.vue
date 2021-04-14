


<template>

  <div id="tabb">
<b-row >
  <b-col cols="2">
    <input type="text" id="srch" placeholder="Search " v-model="filter" />
    </b-col>
    <b-col cols="1" id="not" >
      <div>
     <b-button variant="outline-success" size="lg" id="show-btn" @click="showModal">Add</b-button>

     <b-modal ref="my-modal" hide-footer title=" Add contact">
      <div class="d-block text-center">
       
       <b-form @submit="onSubmit" @reset="onReset" v-if="show">

          <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.first_name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      

       <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.last_name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Address:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.address"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Contact:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.contact"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

     

     

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
   

      </div>
      
     
    </b-modal>

     </div>
    </b-col>
    </b-row>
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
         <td v-html="highlightMatches(row.address)"></td>
        <td v-html="highlightMatches([...row.contact].sort().join(', '))"></td>
        <td v-html="highlightMatches(row.email)"></td>
         
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
      { firstname: "Christabel", lastname: "Chings", address:"harare",contact:"O773 55476", email: "Ch@gmail.com",},
     
    ],

    form: {
          first_name: '',
           last_name: '',
            address: '',
             contact: '',
              email: '',
         
          
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
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
    },

     showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
  },
  
  computed: {
    filteredRows() {
      return this.rows.filter(row => {
        const lastname = row.lastname.toString().toLowerCase();
        const firstname = row.firstname.toLowerCase();
         const address = row.address.toLowerCase();
        
        const searchTerm = this.filter.toLowerCase();

        return (
          firstname.includes(searchTerm) || lastname.includes(searchTerm)|| address.includes(searchTerm)
        );
      });
    }
  }
};

</script>

<style scoped>
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
#srch{
  width: 180px;
}
#not{
  margin-top: 25px;
}
</style> -->





<style>
#app{
  margin-top: 10px;
}
#back{
  margin-left: 98%;
  margin-top: 2px;
}

</style>

