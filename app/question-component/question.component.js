angular.module("finalAssessment").component("quizQuestion", {
  template: require('./question.html'),
  bindings: {
    question: '<',
    questionNumber: '<'
  },

  controller: function() {}
});
