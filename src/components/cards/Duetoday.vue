<template>
     <b-card
    
    border-variant="success"
    img-top
    tag="article"
    id="due"
    class="mb-2"
  >

    <h6> <b-icon icon="exclamation-triangle-fill" variant="warning" scale="1.5"></b-icon>    Due Today </h6>
    <h4>22</h4>
    <hr v-if="active === 'dueToday_active'" class="activebar">
  </b-card>
</template>
<script>
export default {
    props: ['active'],

}
</script>
<style>
#due:hover{
transform: scale(1.1);
}
.activebar{
  background-color: green;
}
</style>