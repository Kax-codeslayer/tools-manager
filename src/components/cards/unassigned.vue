<template>
     <b-card
    
    border-variant="success"
    img-top
    tag="article"
    id="un"
    class="mb-2"
  >
<h6> <b-icon icon="exclamation-triangle-fill" scale="1.5" variant="success"></b-icon>    Unassigned</h6>
   <h4> 100 </h4>
   <hr v-if="active === 'unsigned_active'" class="activebar">
  </b-card>
</template>
<script>
export default {
   props: ['active'],
}
</script>
<style>
#un:hover{
  transform: scale(1.1);
}
.activebar{
  background-color: green;
}
</style>