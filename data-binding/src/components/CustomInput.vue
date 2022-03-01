<template>
  <div>
    <input type="text" :value="value" @input="event => $emit('input', event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>