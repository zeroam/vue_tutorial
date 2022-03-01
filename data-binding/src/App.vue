<template>
  <div>
    <CustomInput v-model="customInputData" />
    <CustomComponent :title.sync="text" :name.sync="name" />
    <AntiComponent :datas=datas />
  </div>
</template>

<script>
import CustomInput from './components/CustomInput.vue'
import CustomComponent from './components/CustomComponemt.vue'
import AntiComponent from './components/AntiComponent.vue'

export default {
  name: 'App',
  components: {
    AntiComponent,
    CustomInput,
    CustomComponent,
  },
  data() {
    return {
      customInputData: '',
      text: '',
      name: '',
      datas: {
        text: '',
        name: '',
      }
    }
  },
}
</script>