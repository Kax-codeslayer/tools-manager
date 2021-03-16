
<template>

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