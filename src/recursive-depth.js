//*const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //*throw new CustomError('Not implemented');
    // remove line with error and write your code here
      let max = 1;
      arr.forEach(element => {
          if (Array.isArray(element)) {
              var count = 1;
              count += this.calculateDepth(element);
              if (count > max) {
                  max = count;
              }
          }
      });
      return max;
  }

};
