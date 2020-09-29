const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
			if (!date) return 'Unable to determine the time of year!';
			if ( (Object.prototype.toString.call(date) !== '[object Date]'))   throw new Error() ;
			let season = new Date(date).getMonth();
			
				if (season > 1 && season <= 4) {
						return 'spring';
				} 
				else if (season > 4 && season <= 7) {				
						return 'summer';
				}
				else if (season > 7 && season <= 10) {
						return 'autumn';
				}
				else {
						return 'winter'					
				}
			}
