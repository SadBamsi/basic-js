const CustomError = require("../extensions/custom-error");

const chainMaker = {
  tempRes: [],
  getLength() {
    return this.tempRes.length
  },
  addLink(value) {
    value || value == 0 || isNaN(value) ? this.tempRes.push(`( ${value} )`) : value === null ? this.tempRes.push('( null )') : this.tempRes.push('( )')
    return this;
  },
  removeLink(position) {
    if (position % 1 != 0 || this.tempRes[position - 1] == undefined) { this.tempRes = []; throw new Error() }
    this.tempRes.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.tempRes.reverse();
    return this;
  },
  finishChain() {
    let res =  this.tempRes.join(`~~`);
    this.tempRes = [];
    return res;
  }
};

module.exports = chainMaker;
