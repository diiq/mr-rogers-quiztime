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
  new Result("mop", "Being a mop is a-ok.", "https://media1.s-nbcnews.com/i/newscms/2017_30/1230740/how-often-should-you-mop-today-tease-170724_74d31634de3a8984109b964685751857.jpg"),
  new Result("bucket", "You have an inside and an outside.", "https://blogwillis-zippykid.netdna-ssl.com/wp-content/uploads/2012/09/5-colored-buckets_645x400.jpg"),
  new Result("dustpan", "Couldn't be worse.", "https://reference-board.s3.amazonaws.com/references/images/06a/47d/b3-/medium/open-uri20180308-4-1gzjxmq?1520527002.png")
]);
