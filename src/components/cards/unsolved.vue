<template>
     <b-card
    
   border-variant="success"
    img-top
    tag="article"
    id="uns"
    class="mb-2"
  >
  <h6> <b-icon icon="exclamation-circle-fill" variant="danger" scale="1.5"></b-icon>    Usolved </h6>
  <h4>22</h4>
  <hr v-if="active === 'unsolved_active'" class="activebar">
  </b-card>
</template>
<script>
export default {
   props: ['active'],
}
</script>
<style>
#uns:hover{
  transform: scale(1.1);
}
.activebar{
  background-color:green;
}
</style>
