const WINDOW_SIZE = 10;
let numberWindow = [];

function addNumbers(newNumbers) {
  const uniqueNew = newNumbers.filter(n => !numberWindow.includes(n));
  numberWindow.push(...uniqueNew);

  if (numberWindow.length > WINDOW_SIZE) {
    numberWindow = numberWindow.slice(numberWindow.length - WINDOW_SIZE);
  }
}

function getWindow() {
  return [...numberWindow];
}

function getAverage() {
  if (numberWindow.length === 0) return 0;
  const sum = numberWindow.reduce((a, b) => a + b, 0);
  return parseFloat((sum / numberWindow.length).toFixed(2));
}

module.exports = {
  addNumbers,
  getWindow,
  getAverage
};
