<template>
  <div>
    <b-row>
  <b-nav  align="center">
    <b-col cols="1">
<b-icon icon="person-square" variant="light" >
  
  
  
</b-icon> 
</b-col>
<b-col>
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Contacts"
      toggle-class="nav-link-custom"
      color="black"
      
      right
    >
      <b-dropdown-item> <router-link to="individualContacts" id="my-nav-dropdown" >Individuals</router-link></b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item><router-link to="comContacts" id="my-nav-dropdown">Companies</router-link></b-dropdown-item>     
    </b-nav-item-dropdown>
</b-col>
  </b-nav>
    </b-row>
</div>
</template>
<style>
#my-nav-dropdown{
  color:black;
}
a{
  color:white;

}
</style>