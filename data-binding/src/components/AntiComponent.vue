<template>
  <div>
    <input type="text" v-model="datas.text" />
    <input type="text" v-model="datas.name" />
  </div>
</template>

<script>
export default {
  name: 'AntiComponent',
  props: ['datas']
}
</script>