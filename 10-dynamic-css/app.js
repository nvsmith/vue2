new Vue({
  el: "#vue-app",

  data: {
    available: false,
    nearby: false,
    grow: false,
  }, // end data

  methods: {}, //end methods

  computed: {
    compClasses: function () {
      return {
        nearby: this.nearby,
        grow: this.grow,
      };
    },
  }, // end computed
});
