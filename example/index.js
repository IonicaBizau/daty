const Daty = require("../lib");

// You can initialize Daty using the date parameters
const d = new Daty(2015, 11, 16, 18, 42);

// ...but you have friendly date formatting
console.log(d.format("LL"));
// => December 16, 2015

console.log(d.format("LLLL"));
// => Wednesday, December 16, 2015 6:42 PM

console.log(d.utc().format("LLLL"));
// => Wednesday, December 16, 2015 4:42 PM

// Go back in the history, when the Romanian revolution started in 1989
// We will clone the current date since we will need it later.
// Also, subtract 26 years.
const revolutionDate = d.clone().subtract(26, "years");
console.log(revolutionDate.format("LLL"));
// => December 16, 1989 12:00 AM

// Make a difference in years
const difference = new Daty().diff(revolutionDate, "years");

console.log(`Right now there are ${difference} years since the Romanian revolution, 1989.`);
// => Right now there are 26 years since the Romanian revolution, 1989.
