/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const digits = {
      'Billion':  1000000000,
      'Million':  1000000,
      'Thousand': 1000,
      'Hundred':  100
    }
    const map = {
      'Hundred': 100,
      'Ninety': 90,
      'Eighty': 80,
      'Seventy': 70,
      'Sixty': 60,
      'Fifty': 50,
      'Forty': 40,
      'Thirty': 30,
      'Twenty': 20,
      'Ten': 10,
      'Nine': 9,
      'Eight': 8,
      'Seven': 7,
      'Six': 6,
      'Five': 5,
      'Four': 4,
      'Three': 3,
      'Two': 2,
      'One': 1
    }
    var decimal = {
      19: 'Nineteen',
      18: 'Eighteen',
      17: 'Seventeen',
      16: 'Sixteen',
      15: 'Fifteen',
      14: 'Fourteen',
      13: 'Thirteen',
      12: 'Twelve',
      11: 'Eleven',
      10: 'Ten',
      9: 'Nine',
      8: 'Eight',
      7: 'Seven',
      6: 'Six',
      5: 'Five',
      4: 'Four',
      3: 'Three',
      2: 'Two',
      1: 'One',
      0: 'Zero'
    }
    if (num < 20) {
      return decimal[num];
    }
    const list = [];
    if (num > digits['Billion']) {
      
    } else if (num > digits['Million']) {

    } else if (num > digits['Thousand']) {

    } else {

    }
    return list.join(' ');
};

console.log('#### answer = ' , numberToWords(process.argv[2]))