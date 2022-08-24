new Vue({
  el: "#vue-app",

  data: {
    age: 20,
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  }, // end data

  methods: {
    addToA: function () {
      console.log("addToA run");
      return this.a + this.age;
    },
    addToB: function () {
      console.log("addToB run");
      return this.b + this.age;
    },
  }, //end methods

  computed: {
    addToC: function () {
      console.log("addToC run");
      return this.c + this.age;
    },
    addToD: function () {
      console.log("addToD run");
      return this.d + this.age;
    },
  }, // end computed
});
