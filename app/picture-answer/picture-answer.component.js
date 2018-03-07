angular.module("finalAssessment").component("pictureAnswer", {
  template: require('./picture-answer.html'),
  bindings: {
    answer: "<",
    questionNumber: "<",
    answerNumber: "<"
  },
  controller: ["QuizService", function(QuizService) {
    this.setAnswer = function() {
      console.log(this.questionNumber);
      QuizService.setAnswer(this.questionNumber, this.answerNumber);
    }
  }]
});
