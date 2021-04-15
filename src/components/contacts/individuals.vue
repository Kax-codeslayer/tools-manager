


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
       
       <b-form @submit="tesr" @reset="onReset" v-if="show">

         
      

       <b-form-group id="input-group-3" label="name:" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="massage:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="massage"
          placeholder="massage"
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
      <b-button  variant="primary" v-on:click="tesr">Submit</b-button>
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
         <td v-html="highlightMatches(row.id)"></td>
        <td v-html="highlightMatches([...row.name].sort().join(', '))"></td>
         <td v-html="highlightMatches(row.email)"></td>
        <td v-html="highlightMatches([...row.massage].sort().join(', '))"></td>
        <td v-html="highlightMatches(row.date)"></td>
         
      </tr>
      
    </tbody>
  </table>

  
</div>
</template>
<script>
import axios from 'axios';
   export default{
  
  data (){ return{
    filter: "",
    rows: [
      { firstname: "Christabel",
       lastname: "Chings",
        address:"harare",
        contact:"O773 55476", 
        email: "Ch@gmail.com",},
    ],

    data: {
       
        },
          name: '',
           email: '',
            massage: '',
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('http://itrackdevs.geo-fuel.com/tools_manager_api/getAllmail.php');
      const data = await res.json();
      this.data = data;
    },

    tesr()
    {
      console.log("meeee"),
      console.log(this.name),
      console.log(this.massage),
       console.log(this.email)
    },

    createContact (){
        console.log("Create contact!")

        let formData = new FormData();
        console.log("name:", this.data.name,
                 "massage:", this.data.massage,
                  "email:", this.data.email,                 )
        formData.append('name', this.data.name,
                    'massage', this.data.massage,
                  'email', this.data.email
        
        )
        
           
        var contact = {};
        formData.forEach(function(value, key){
            contact[key] = value;
        });

        axios({
            method: 'post',
            url: 'http://itrackdevs.geo-fuel.com/tools_manager_api/toolsapi.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
       
        .catch(function (response) {
            //handle error
            console.log(response)
            
        });
    },

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
      return this.data.filter(row => {
        const id = row.id.toString().toLowerCase();
        const name = row.name.toLowerCase();
         const massage = row.massage.toLowerCase();
        
        const searchTerm = this.filter.toLowerCase();

        return (
          id.includes(searchTerm) || name.includes(searchTerm)|| massage.includes(searchTerm)
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

