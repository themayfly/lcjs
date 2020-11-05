const getSubSeq = str => {
  if (!str) {
    return [];
  }
  const subseq = [];
  for (let i = 0; i<str.length; i++) {
    for (let j = i+1; j<=str.length; j++) {
      subseq.push(str.slice(i, j))
    }
  }
  return subseq;
}

console.log(getSubSeq('abcd'))

const longestSubSeq = subseq => {
  subseq.sort((a, b) => {
    if (a.length === b.length) {
      return 0;
    } else {
      return a.length > b.length ? 1 : -1;
    }
  });
  return subseq.pop();
}
console.log(longestSubSeq(getSubSeq('abcd')))


const getCommonSubSeq = (str1, str2) => {
  const seq1 = getSubSeq(str1);
  const seq2 = getSubSeq(str2);
  const commonSeq = seq1.filter(el => seq2.indexOf(el) > -1);
  console.log('commonSeq = ', commonSeq)
}

longestSubSeq(getCommonSubSeq('ABAZDC', 'BACBAD'))