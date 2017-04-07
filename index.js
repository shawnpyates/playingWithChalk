var chalk = require("chalk");

var message = chalk.bgGreen.bold("Hello ") + chalk.yellow.inverse("World");
console.log(message);

