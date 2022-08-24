new Vue({
  el: "#vue-app",

  data: {
    age: 25,
    x: 0,
    y: 0,
  }, // end data

  methods: {
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert("Leaving is forbidden!");
    },
  }, //end methods
});
