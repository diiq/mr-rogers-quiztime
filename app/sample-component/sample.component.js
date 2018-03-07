angular.module("finalAssessment").component("mySample", {
  template: require('./sample.html'),
  controller: function() {
    this.text = "component";
  }
});
