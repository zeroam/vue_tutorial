// Listening to Events
var example1 = new Vue({
  el: "#example-1",
  data: {
    counter: 0,
  },
});

// Method Event Handlers
var example2 = new Vue({
  el: "#example-2",
  data: {
    name: "Vue.js",
  },
  methods: {
    greet: function (event) {
      alert("Hello " + this.name + "!");
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
});

// Methods in Inline Handlers
var example3 = new Vue({
  el: "#example-3",
  methods: {
    say: function (message) {
      alert(message);
    },
    warn: function (message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
});
