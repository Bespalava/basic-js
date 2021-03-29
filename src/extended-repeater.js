//*const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //*throw new CustomError('Not implemented');
  // remove line with error and write your code here
   let turns = 2**disksNumber - 1;
  let seconds = Math.floor(turns / (turnsSpeed / (60*60)));
  return {turns: turns, seconds: seconds}
};
  
