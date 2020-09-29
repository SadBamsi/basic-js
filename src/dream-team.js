const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
  	let res = [];
  	for (let item of arr) {
  		if (typeof item == 'string') {
  			item = item.replace(/\s/g, '').split('');
  			res.push(item[0].toUpperCase())
  		}
  	}
  	return res.sort().join('');
  }
  return false;
};
