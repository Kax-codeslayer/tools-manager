<template>
     <b-card
    
    border-variant="success"
    img-top
    tag="article"
    id="ov"
    
    class="mb-2"
  >

    <h6> <b-icon icon="collection-fill" scale="1.5" variant="danger"></b-icon>   Overdue</h6>
   <h4> 10 </h4>
    <hr v-if="active === 'overdue_active'" class="activebar">
  </b-card>
</template>
<script>
export default {
   props: ['active'],
}
</script>
<style>
#ov:hover{
  transform: scale(1.1);
}
.activebar{
  background-color:green;
}
</style>