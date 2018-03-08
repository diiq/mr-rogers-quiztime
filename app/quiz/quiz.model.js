export class Quiz {
  constructor(questions, results) {
    this.questions = questions;
    this.results = results;
  }

  sumFor(result) {
    return this.questions.map(
      question => question.selectedAnswer().effect[result]
    ).reduce((a, b) => a + b);
  }

  result() {
    var max = -Infinity;
    var maxResult = null;
    this.results.forEach(result => {
      const score = this.sumFor(result.name);
      if (score > max) {
        max = score;
        maxResult = result;
      }
    });
    return maxResult;
  }
    
  setAnswer(questionNumber, answerNumber) {
    this.questions[questionNumber].setAnswer(answerNumber);
  }

  answerFor(questionNumber) {
    return this.question[questionNumber].selectedAnswer();
  }

  reset() {
    this.questions.forEach(
      q => q.clearAnswer()
    );
  }
}

export class Question {
  constructor(text, answers) {
    this.text = text;
    this.answers = answers;
    this.userAnswer = null;
  }

  setAnswer(answerNumber) {
    this.userAnswer = answerNumber;
  }

  selectedAnswer() {
    return this.answers[this.userAnswer];
  }

  clearAnswer() {
    this.userAnswer = null;
  }
}

export class Answer {
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

export class Result {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}