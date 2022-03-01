<template>
  <div>
    <input type="text" :value="title" @input="event => $emit('update:title', event.target.value)" />
    <input type="text" :value="name" @input="event => $emit('update:name', event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  props: ['title', 'name']
}
</script>