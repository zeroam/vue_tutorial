<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>made by getters</h1>
    <div v-for="getteruser in getterusers" :key="getteruser.id">
      {{ getteruser.id }} {{ getteruser.name }} {{ getteruser.address }}
    </div>
    <h1>made by actions</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
  </div>
</template>

<script>
export default {
  name: "helloworld",
  props: {
    msg: String,
  },
  computed: {
    getterusers() {
      return this.$store.getters.allUsers;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<!-- add "scoped" attribute to limit css to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
