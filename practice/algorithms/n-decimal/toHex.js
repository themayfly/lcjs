/**
 * @param {number} num
 * @return {string}
 */

// toHex(14);
const digits = '0123456789abcdef';
var toHex = function(num) {
    let target = num;
    let results = '';
    while (target > 0) {
        let div = Math.floor(target / 16);
        let mod = target % 16;
        if (div > 0) {
          results += (''+digits[div]);
        }
        target -= (div * 16);
        if (mod > 0) {
            results += (''+digits[mod]);
        }
        console.log('#### div = %s, mod = %s, target = %s', div, mod, target)
        if (mod >= target) {
          break;
        }
    }
    return results;
};

console.log('#### answer = %s', toHex(14));
