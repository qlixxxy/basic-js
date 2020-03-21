module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let i = Math.pow(2,disksNumber) - 1;
  let object = {
  get turns() {return i},
  get seconds() {return (i / (turnsSpeed / 3600))},
}
return object
}