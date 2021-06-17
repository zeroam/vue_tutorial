// Basic Example
var vm = new Vue({
  el: "#example",
  data: {
    message: "Hello",
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
  },
});

// Computed vs Watched Property
var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    // fullName: 'Foo Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
  // watch: {
  // 	firstName: function (val) {
  // 		this.fullName = val + ' ' + this.lastName
  // 	},
  // 	lastName: function (val) {
  // 		this.fullName = this.firstName + ' ' + val
  // 	}
  // }
});

// Watchers
var watchExampleVM = new Vue({
  el: "#watch-example",
  data: {
    question: "",
    answer: "I cannot give you an answer until you ask as question!",
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Question usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function (error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
});
