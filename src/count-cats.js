const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
	let res = 0;	
	if (typeof arr == 'object') {
		for(let item of arr) {
			if ( typeof item == 'object' ) {
				for ( let word of item ) {
					word == '^^' ? res +=1 : false;
				}
			}
		}
	}
	return res;
 };
