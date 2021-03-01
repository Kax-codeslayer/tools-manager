
<template>

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



