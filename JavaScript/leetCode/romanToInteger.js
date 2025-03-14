let romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(input = "I") {
  let decoded = romanNumerals[input[0]];
  let previousValue = decoded;
  for (let i = 1; i < input.length; i++) {
    let currentValue = romanNumerals[input[i]];
    if (currentValue > previousValue) {
      if (
        previousValue * 5 === currentValue ||
        previousValue * 10 === currentValue
      ) {
        decoded = decoded - previousValue + (currentValue - previousValue);
      } else {
        return -1;
      }
    } else {
      decoded += currentValue;
    }
    previousValue = currentValue;
  }
  return decoded;
}