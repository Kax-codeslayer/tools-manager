<template>
    <div class="filter-card">
        <h6>Filters</h6>
        <!-- dropdown start -->
        <b-form-group
        id="fieldset-1"
        label="Agents"
        label-for="dropdown-1"
    >
    <b-dropdown id="dropdown-1" class="m-md-2 drp">
    <b-dropdown-item>Elvin</b-dropdown-item>
    <b-dropdown-item>Anesu</b-dropdown-item>
    <b-dropdown-item>Junior</b-dropdown-item>
  </b-dropdown>
    </b-form-group>
  <!-- dropdown end -->

   <!-- dropdown start -->
        <b-form-group
        id="fieldset-2"
        label="Groups"
        label-for="dropdown-1"
    >
    <b-dropdown id="dropdown-2"  class="m-md-2 drp">
    <b-dropdown-item>Support</b-dropdown-item>
    <b-dropdown-item>Marketing</b-dropdown-item>
    <b-dropdown-item>Accounting</b-dropdown-item>
  </b-dropdown>
    </b-form-group>
  <!-- dropdown end -->

  <!-- dropdown start -->
        <b-form-group
        id="fieldset-3"
        label="Created"
        label-for="dropdown-3"
    >
    <b-dropdown id="dropdown-3"  class="m-md-2 drp">
    <b-dropdown-item>Last 30 days</b-dropdown-item>
    <b-dropdown-item>Today</b-dropdown-item>
    <b-dropdown-item>Last 7 days</b-dropdown-item>
  </b-dropdown>
    </b-form-group>
  <!-- dropdown end -->

  <!-- dropdown start -->
        <b-form-group
        id="fieldset-4"
        label="Status"
        label-for="dropdown-4"
    >
    <b-dropdown id="dropdown-4" class="m-md-2 drp">
    <b-dropdown-item>Open</b-dropdown-item>
    <b-dropdown-item>Pending</b-dropdown-item>
    <b-dropdown-item>closed</b-dropdown-item>
  </b-dropdown>
    </b-form-group>
  <!-- dropdown end -->



    </div>
</template>
<script>
export default {
    
}
</script>

<style>
.filter-card{
    padding: 1rem;
    margin: .5rem;
    border-radius: 3px;
    background-color: #fff;
}
.drp{
    width: 90%;
    background-color: #fff  !important;
    color: rgb(158, 147, 147) !important;
    
}
.btn-secondary{
    background-color: #fff  !important;
    color: rgb(158, 147, 147) !important;
}
</style>