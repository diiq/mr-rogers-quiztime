const { quiz } = require("quiz/quiz-data");

angular.module("finalAssessment").service("QuizService", function() {
  this.currentQuestionNumber = 0;

  this.setAnswer = function(questionNumber, answerNumber) {
    console.log("HERE!")
    quiz.setAnswer(questionNumber, answerNumber);
    this.currentQuestionNumber += 1;
  }

  this.answerFor = function(questionNumber) {
    return quiz.answerFor(questionNumber);
  }

  this.result = function() {
    return quiz.result();
  }
  
  this.questions = function() {
    return quiz.questions;
  }

  this.currentQuestion = function() {
    return quiz.questions[this.currentQuestionNumber];
  }

  this.reset = function() {
    quiz.reset();
    this.currentQuestionNumber = 0;
  }
});

