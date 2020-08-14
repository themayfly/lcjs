/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

var count = 62**5;
var encodeData = {};
var decodeData = {};
var encode = function(longUrl) {
  if (longUrl in encodeData) {
    return encodeData[longUrl];
  }
  const DIGITS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let str = '';
  count++;
  let num = count;
  while (num > 0) {
    str = DIGITS[num % DIGITS.length] + str;
    num = Math.floor(num / DIGITS.length);
  }
  encodeData[longUrl] = 'http://tinyurl.com/'+str;
  decodeData['http://tinyurl.com/'+str] = longUrl;
  return encodeData[longUrl];
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return decodeData[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

