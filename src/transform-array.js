const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
      let temp =  Array.from(arr)
      temp.map((item, i) => {
            switch (item) {
                  case '--discard-next' :
                        i != temp.length - 1 ? delete(temp[i + 1]) : false;
                        delete(temp[i])
                        break;
                  case '--discard-prev' :
                        i != 0 && temp[i-1] != undefined ? delete(temp[i - 1]) : false;
                        delete(temp[i])
                        break;
                  case '--double-prev' :
                        temp[i-1] != undefined ? temp[i] = temp[i - 1] : delete(temp[i]);
                        break; 
                  case '--double-next' :
                        temp[i + 1] != undefined ? temp[i] = temp[i + 1] :  delete(temp[i]);
                        break; 
                  default: 
                        return item;
            }
      })
      return temp.filter((item) => item != undefined)
};
