const { Quiz, Question, Answer, Result } = require('./quiz.model');

export const quiz = new Quiz([
  new Question("Where would you go for vacation?", [
    // Plains
    new Answer("image", "https://reference-board.s3.amazonaws.com/references/images/8f2/086/5d-/medium/data?1512329298", {
      mop: 0,
      bucket: -1,
      dustpan: 2
    }),

    // Misty mountain
    new Answer("image", "https://reference-board.s3.amazonaws.com/references/images/9c6/7ae/96-/medium/data?1508674664", {
      mop: 2,
      bucket: 1,
      dustpan: 0
    }),

    // Oceanic ruin
    new Answer("image", "https://reference-board.s3.amazonaws.com/references/images/037/599/2c-/medium/data?1518013403", {
      mop: 1,
      bucket: 3,
      dustpan: -2
    }),

    // Snowy folly
    new Answer("image", "https://reference-board.s3.amazonaws.com/references/images/432/823/15-/medium/open-uri20171126-4-1ga4ew?1511716550", {
      mop: 1,
      bucket: 1,
      dustpan: 0
    })
  ]),


  new Question("What do you like to eat?", [
    new Answer("text", "A sandwich", {
      mop: 0,
      bucket: 0,
      dustpan: 1
    }),

    new Answer("text", "A pie", {
      mop: 1,
      bucket: 0,
      dustpan: 1
    }),

    new Answer("text", "A scotch egg", {
      mop: 1,
      bucket: -1,
      dustpan: -1
    }),

    new Answer("text", "A loaf of bread and a jug of wine", {
      mop: 1,
      bucket: 1,
      dustpan: -1
    })
  ])


], [
  new Result("mop", "Being a mop is a-ok.", ""),
  new Result("bucket", "You have an inside and an outside.", ""),
  new Result("dustpan", "Couldn't be worse.", "")
]);
