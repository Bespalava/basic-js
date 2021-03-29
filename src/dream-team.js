//*const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //*throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var Command = [];
  if(!Array.isArray(members)){
    return false;
  }
  
  members.forEach(item => {
    if(typeof item == 'string'){
      item = item.replace(/\s+/g,'');
      Command.push(item[0].toUpperCase());
    }
  });

  var CommandStr = Command.sort().join('');
  return CommandStr;
};
