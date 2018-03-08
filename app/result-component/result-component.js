angular.module("finalAssessment").component("resultPage", {
  template: require('result-component/result.html'),
  controller: ["QuizService", function(QuizService) {
    this.result = QuizService.result();
  }]
});
