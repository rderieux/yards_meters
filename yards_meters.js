function convertToMeters(yards) {
  return yards * 0.9144;
}

function createMessage(yards, meters) {
  let message;
  const numYards = yards * 1;

  if (numYards === 1760) {
    message = "That is as long as a mile.";
  } else if (numYards === 100) {
    message = "That is as long as a football field.";
  } else if (numYards === 26) {
    message = "That is as long as a tennis court.";
  } else {
    message = "I don't have anything interesting to say about that number.";
  }

  return `You converted ${numYards} yards into ${meters} meters.  ${message}`;
}

function createRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

let inputYards = prompt(
  "Please enter the number of yards you would like to convert to meters.",
  "1760"
);
let convertedMeters = convertToMeters(inputYards);
let output = createMessage(inputYards, convertedMeters);
console.log(output);

inputYards = prompt(
  "Lets try that again.  Enter another number to convert yards to meters.",
  "26"
);
convertedMeters = createMessage(inputYards, convertedMeters);
output = createMessage(inputYards, convertedMeters);
console.log(output);

let randomYards = createRandomNumber(100);
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

randomYards = createRandomNumber(10000);
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);
