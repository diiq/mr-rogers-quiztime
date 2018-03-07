angular.module("finalAssessment").component("textAnswer", {
  template: require('text-answer-component/text-answer.html'),
  bindings: {
    answer: "<",
    questionNumber: "<",
    answerNumber: "<",
  },
  controller: ["QuizService", function(QuizService) {
    this.setAnswer = function()  {
      console.log("uhhh")
      QuizService.setAnswer(this.questionNumber, this.answerNumber);
    }
  }]
});
