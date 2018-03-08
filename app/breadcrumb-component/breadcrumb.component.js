angular.module("finalAssessment").component("breadcrumbComponent", {
  template: require('./breadcrumb.html'),

  controller: ["QuizService", function(QuizService) {
    this.questions = QuizService.questions();


    this.getCurrentQuestion = function() {
      return QuizService.currentQuestion();
    }
  }]
});
