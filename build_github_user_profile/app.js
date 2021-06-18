Vue.component("github-user-card", {
  template: "#github-user-card-template",
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    url = `https://api.github.com/users/${this.username}`;
    resp = axios
      .get(url)
      .then((resp) => {
        console.log(resp);
        this.user = resp.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

new Vue({
  el: "#app",
  data: {
    usernames: ["hootlex", "mojombo", "zeroam"]
  }
});
