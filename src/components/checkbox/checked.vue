<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="done"
      unchecked-value="not_done"
    >
      Creating Tickets Reports
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: 'not_done'
      }
    }
  }
</script>