/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */

var camelMatch = function(queries, pattern) {
  const syllablesPattern = getSyllable(pattern);
  return queries.map(query => {
    // 1. number of syllable should match
    const syllablesQuery = getSyllable(query);
    // if (syllablesPattern.length !== syllablesQuery.length) {
    //   return false;
    // }
    // 2. each syllable of pattern should match any of word from queries
    const allMatch = syllablesQuery.every((sq, idx) => {
      const _isSubSeq = isSubSeq(sq, syllablesPattern[idx]);
      console.log('#### sq = %s, sp = %s, _isSubSeq = %s', sq, syllablesPattern[idx], _isSubSeq)
      return _isSubSeq
      // return sq.match(syllablesPattern[idx]) ? true : false;
    });
    return allMatch;
  })
};

var isSubSeq = function(syl, sub) {
  // return true if sub is subseq of syl else return false
  const orders = [];
  const initialSubLen = sub.length;
  sub.split('').forEach(el => {
    const idx = syl.indexOf(el);
    if (idx > -1) {
      orders.push(idx);
      syl = syl.slice(0, idx) + syl.slice(idx+1);
    }
  });
  if (orders.length !== initialSubLen) {
    return false;
  }
  // 1. order check
  let prev = -1;
  orders.forEach(el => {
    if (prev > el) {
      return false;
    }
  })
  return true
}


var getSyllable = function(word) {
    if (!word || !word.match(/[A-Z]/)) {
        return [];
    }
    let chars = [];
    let syllables = [];
    word.split('').forEach(char => {
      if (char.match(/[A-Z]/)) {
        // push into syllables if chars is not empty
        if (chars.length > 0) {
          syllables.push(chars.join(''));
          chars = [];
        }
      }
      chars.push(char);
    });
    syllables.push(chars.join(''));
    return syllables;
};

console.log('#### syllable = ', camelMatch(
  ["uAxaqlzahfialcezsLfj","cAqlzyahaslccezssLfj","AqlezahjarflcezshLfj","AqlzofahaplcejuzsLfj","tAqlzahavslcezsLwzfj","AqlzahalcerrzsLpfonj","AqlzahalceaczdsosLfj","eAqlzbxahalcezelsLfj"],
  "AqlzahalcezsLfj"

  // ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"],
  // "FoBaT"
))

// console.log('#### subseq = ', getSubSeq('CooperTeeth'));
// console.log('#### isSubSeq = ', isSubSeq('CooperTeeth', 'oT'));