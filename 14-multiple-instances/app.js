var one = new Vue({
  el: "#vue-app-one",

  data: {
    title: "Vue App One",
  }, // end data

  methods: {}, //end methods

  computed: {
    greet: function () {
      return "Hello from app one";
    },
  }, // end computed
});

var two = new Vue({
  el: "#vue-app-two",

  data: {
    title: "Vue App Two",
  }, // end data

  methods: {
    changeTitle: function () {
      one.title = "Title Changed By App Two Below";
    },
  }, //end methods

  computed: {
    greet: function () {
      return "This is App #2 at work";
    },
  }, // end computed
});
