let inputYards = prompt(
  "Please enter the number of yards you would like to convert to meters.",
  "1760"
);

function convertToMeters(yards) {
  return yards * 0.9144;
}

let convertedMeters = convertToMeters(inputYards);

console.log(convertedMeters);

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
