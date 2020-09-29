const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;
    if (!Array.isArray(arr)) return 0;
    for (let item of arr) {
      res = Math.max(this.calculateDepth(item) + 1, res)
    }
    return res;
  }
};