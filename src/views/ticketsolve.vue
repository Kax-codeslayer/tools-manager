<template>



<div class="text-center">
    <div>
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
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Reply</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Add-Note</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Forward</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Close</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Merge</b-button></b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      
    </b-collapse>
  </b-navbar>
</div>

    <b-row text="left">
    <b-col cols="6">
        <b-row>
            <b-col cols="3" >
<b-icon icon="envelope"></b-icon>
            </b-col>

            <b-col>
                <h5> Car is offline</h5>
                </b-col>
        </b-row>

 <b-row>
            <b-col cols="3">
 <span class="badge badge-secondary">C</span>
            </b-col>

            <b-col cols="">
                 kikie c    via email 
                <p><i>14 days ago</i></p>
                </b-col>
        </b-row>

        <b-row>
            <b-col cols="3">
<b-icon icon="envelope"></b-icon>
            </b-col>

            <b-col>
               <p><i>Heey There</i></p>
 <p> My car has been oofline for days now and i havent been receiving my my reports. </p> 
                </b-col>
        </b-row>

           <b-row>
            <b-col cols="3">
<span class="badge badge-secondary">C</span>
            </b-col>

            <b-col>
               
<b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Reply</b-button>
<b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Add Note</b-button>
<b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Forward</b-button>
                </b-col>
        </b-row>

    </b-col>
    <b-col cols="3" >
<div>
    <div>
    <h5>Open</h5>
    <p>FIRST RESPONSE DUE</p>
    <P>by 20 April 2020,10:00</P></div>
    <div>
    
    RESOLUTION  DUE  <i>Edit</i>
   <p> <small>by 20 April 2020,10:00</small></p></div>
    <hr>
  <b-form >
    <label><small>Tags</small></label>
    <b-form-input ></b-form-input>
    
    
     <label for="input-with-list"><small>Type</small></label>
    <b-form-input list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>

     <label for="input-with-list"><small>Status</small></label>
    <b-form-input list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist id="input-list" :options="option"></b-form-datalist>

     <label for="input-with-list"><small>Priority</small></label>
    <b-form-input list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist id="input-list" :options="option"></b-form-datalist>

     <label for="input-with-list"><small>Group</small></label>
    <b-form-input list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist id="input-list" :options="option"></b-form-datalist>

     <label><small>Agent</small></label>
    <b-form-input ></b-form-input>
   </b-form>


</div>

    </b-col>
    <b-col cols="3">

<div>
  
    <b-card
      header="Contact Details"
      header-tag="header"
      
      title="Title"
    >
      <b-card-text>
      <b-row>
          <b-col cols="3">
              <span class="badge badge-secondary">C</span>
          </b-col>
         
          <b-col>
               Chris
              </b-col>
      </b-row>
     <p><i><small>Email</small></i></p>
     Kikie@itrack.com
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
</div>

    </b-col>
        </b-row>
</div>
</template>


<script>
export default {
  data() {
    return {
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange'],
      option: ['Open', 'Closed', 'Pending', 'Resolved', 'Waiting on Customer']
    }
  }
}
</script>