     
     
<template>
       <div class="px-5 py-2">
        


  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="contact:"
        label-for="input-1"
        
      >
      <b-form-select
        
          id="input-1"
          v-model="form.contact"
          :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
          placeholder="Enter Contact"
          required
        >
      </b-form-select>
      </b-form-group>
      <b-form-group
         label="subject:"
         id="input-group-2"
         label-for="input-2">
      <b-form-select
      v-model="form.subject"
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Subject...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>

      </b-form-group>
    <b-form-group
         label="Type:"
         id="input-group-2"
         label-for="input-2">
      <b-form-select
      v-model="form.type"
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: '...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>

      </b-form-group>

     <b-form-group
         label="source:"
         id="input-group-2"
         label-for="input-2">
      <b-form-select
      v-model="form.source"
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Source...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>

      </b-form-group>

       <b-form-group
         label="Status:"
         id="input-group-2"
         label-for="input-2">
      <b-form-select
      v-model="form.source"
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Open...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>

      </b-form-group>
      
 <b-form-group
         label="Priority:"
         id="input-group-2"
         label-for="input-2">
      <b-form-select
      v-model="form.priority"
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: '...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>

      </b-form-group>


 <b-form-group
         label="Agent:"
         id="input-group-2"
         label-for="input-2">
         
      <b-form-select
      v-model="form.agent"
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      aria-placeholder="kiki"
      :options="[{ text: 'kikiy...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>

      </b-form-group>

       <b-form-group
         label="Group:"
         id="input-group-2"
         label-for="input-2">
      <b-form-select
      v-model="form.group"
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'group...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>
      </b-form-group>

    <b-form-group
        id="input-group-1"
        label="contact:"
        label-for="input-1"
        
      >
     <b-form-textarea
      id="textarea-state"
      v-model="text"
      placeholder="Enter at least 10 characters"
      rows="3"
    ></b-form-textarea>
      </b-form-group>
   

      <b-button type="submit" variant="primary">Create</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
   
  </div>


        
      </div>
</template>
<script>
export default {
     data() {
      return {
        form: {
          contact: '',
          name: '',
          food: null,
        
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
      
     
  
    },
     methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.contact = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>