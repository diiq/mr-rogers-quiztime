angular.module("finalAssessment").component("mySample", {
  template: require('./sample.html'),
  controller: ["QuizService", function(QuizService) {
    this.question1 = QuizService.questions[0];
    this.question2 = QuizService.questions[1];
    this.answer1 = this.question1.answers[0];
    this.answer2 = this.question2.answers[0];
  }]
});
