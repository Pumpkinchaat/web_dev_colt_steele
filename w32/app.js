const math = require('./math');
const test = require('./test1')
const jokes = require('give-me-a-joke');
const colors = require('colors');
const cowsay = require('cowsay');
console.log(math.add(1, 2), math.mult(2, 7));
console.log(test);
jokes.getRandomJokeOfTheDay('blonde', (joke) => { console.log(joke.america); });
console.log(cowsay.say({
    text: "hi",
    e: "00"
}))