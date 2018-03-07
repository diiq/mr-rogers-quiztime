const { quiz } = require("quiz/quiz-data");

angular.module("finalAssessment").service("QuizService", function() {
  this.currentQuestionNumber = 0;

  this.setAnswer = function(questionNumber, answerNumber) {
    quiz.setAnswer(questionNumber, answerNumber);
    this.currentQuestionNumber += 1;
  }

  this.answerFor = function(questionNumber) {
    return quiz.answerFor(questionNumber);
  }
  
  this.questions = function() {
    return quiz.questions;
  }

  this.currentQuestion = function() {
    return quiz.questions[this.currentQuestionNumber];
  }
});

