let cowsay = require("cowsay");
let randomWords = require('random-words');
let oneLinerJoke = require('one-liner-joke');

// const cowSaySomething = (word) => cowsay.say({
// 	text : word,
// 	e : "@o",
// 	T : "U "
// })

// console.log(cowSaySomething(""));

// const someRandomWords = (x) => randomWords({exactly: x, join: " ; "});

// console.log(someRandomWords(3));

// const f = (word) => word.toUpperCase();

// const someRandomWords = (x, f) => randomWords({
//     exactly: x, wordsPerString: 2,
//     formatter: f
// });

// console.log(someRandomWords(4, (word) => word.toUpperCase()));

// const someRandomWords = (x, y) => randomWords({ exactly: x, maxLength: y });

// console.log(someRandomWords(3, 2));


var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)