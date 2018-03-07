angular.module("finalAssessment").component("mySample", {
  template: require('./sample.html'),
  controller: ["QuizService", function(QuizService) {
    this.question = function() {
      return QuizService.currentQuestion();
    }

    this.questionNumber = function() {
      return QuizService.currentQuestionNumber;
    }
  }]
});
