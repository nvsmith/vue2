Vue.component("greeting", {
  template:
    "<p>This section was generated by a reusable component. <br> If you click the button, it will only update a single section at a time, even though both sections are created from the same component. Neat, eh? <br><br> Sincerely, {{ name }}. <button v-on:click='changeName'>Change Name</button></p>",

  data: function () {
    return {
      name: "Vega",
    };
  }, // end data

  methods: {
    changeName: function () {
      this.name = "Sagat";
    },
  }, // end methods
});

new Vue({
  el: "#vue-app-one",
});

new Vue({
  el: "#vue-app-two",
});