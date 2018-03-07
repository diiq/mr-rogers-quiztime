class Question {
  constructor(text, answers) {
    this.text = text;
    this.answers = answers;
    this.userAnswer = null;
  }

  setAnswer(answerNumber) {
    this.userAnswer = answerNumber;
  }

  clearAnswer() {
    this.userAnswer = null;
  }
}

class Answer {
  constructor(type, item, effect) {
    this.type = type;
    this.effect = effect;
    if (type === "text") {
      this.text = item;
    } else if (type === "image") {
      this.imageUrl = item;
    }
  }
}

angular.module("finalAssessment").service("QuizService", function() {
  this.questions = [
    new Question("Where would you go for vacation?", [
      new Answer("image", "https://reference-board.s3.amazonaws.com/references/images/8f2/086/5d-/medium/data?1512329298", {}),
      new Answer("image", "https://reference-board.s3.amazonaws.com/references/images/9c6/7ae/96-/medium/data?1508674664", {}),
      new Answer("image", "https://reference-board.s3.amazonaws.com/references/images/037/599/2c-/medium/data?1518013403", {}),
      new Answer("image", "https://reference-board.s3.amazonaws.com/references/images/432/823/15-/medium/open-uri20171126-4-1ga4ew?1511716550", {})
    ]),
    new Question("What do you like to eat?", [
      new Answer("text", "A sandwich", {}),
      new Answer("text", "A pie", {}),
      new Answer("text", "A scotch egg", {}),
      new Answer("text", "A loaf of bread, a jug of wine", {})
    ])
  ];
  this.results = [];

  this.setAnswer = function(questionNumber, answerNumber) {

  }

  this.getAnswer = function(questionNumber) {

  }
});
