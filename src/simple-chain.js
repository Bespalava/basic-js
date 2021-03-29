//*const CustomError = require("../extensions/custom-error");

const chainMaker = {
  Chain:[],
  getLength() {
    //*throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.Chain.length;
  },
  addLink(value) {
    //*throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.Chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    //*throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || position < 1 || this.Chain[position] === undefined) {
      this.Chain = [];
      throw new Error('Incorrect');
    }
      this.Chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    //*throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.Chain.reverse();
    return this;
  },
  finishChain() {
    //*throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let line = this.Chain.join('~~');
    this.Chain = [];
    return line; 
  }
};

module.exports = chainMaker;
