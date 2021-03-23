//* const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
//*  throw new CustomError('Not implemented');
  // remove line with error and write your code here

  var count = 0;
  var Rows = [];
  for(var i = 0; i < matrix.length; i++){
    var Rows = matrix[i];
    for(var j = 0; j < Rows.length; j++){
      if(Rows[j] =="^^"){
        count++;
      }
    }
  }
  return count;
};
