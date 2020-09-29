const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if( typeof sampleActivity == 'string') {
		let temp = parseFloat(sampleActivity);
		if ( temp <= 15 && temp > 0 ) {
			let k = 0.693 / HALF_LIFE_PERIOD;
		 	let res = Math.ceil(Math.log(MODERN_ACTIVITY / temp) / k);
		 	return res > 0 ? res : false;
		}
	}
	return false;
};