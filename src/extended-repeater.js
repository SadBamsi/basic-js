const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  if (options) {
    let substring = [];
    let string = [];
    if (options.addition !== undefined) {
      let repeat = options.additionRepeatTimes || 1;
      for (let i = 0; i < repeat; i++) {
        substring.push(String(options.addition));
      }
      substring = substring.join(options.additionSeparator || '|')
     
    }
    let repeat = options.repeatTimes || 1;
    for (let i = 0; i < repeat; i++) {
      string.push(String(str).concat(substring))
    }
    return string.join(options.separator || '+')
  }
  return String(str);
};
  