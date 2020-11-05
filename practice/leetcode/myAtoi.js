/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // starts with - or number
    const MAX = Math.pow(2,31) - 1;
    const MIN = Math.pow(-2,31);
    str = (str || '').trim();
    if (str.match(/^[\+\-\d]/)) {
        if (str.match(/^[\-\+]/)) {
            str = str.slice(0,1) + str.split(/\D/)[1];
        } else {
            str = str.split(/\D/)[0];
        }

        if (isNaN(Number(str))) {
            return 0;
        } else if (Number(str) > MAX) {
            return MAX
        } else if (Number(str) < MIN) {
            return MIN;
        } else {
            return Number(str);
        }
    } else {
        return 0;
    }
};
exports.myAtoi = myAtoi;

