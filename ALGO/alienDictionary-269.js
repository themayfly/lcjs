/**
 * @param {string[]} words
 * @return {string}

  Input:
  [
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
  ]

  Output: "wertf"
*/

var alienOrder = function(words) {
  let graph = {},
    incoming = {};
  // initialize empty graph
  for (let word of words) {
    for (let char of word) {
      graph[char] = new Set();
      incoming[char] = 0;
    }
  }

  // build graph
  for (let i = 1, len = words.length; i < len; i++) {
    let first = words[i - 1];
    let second = words[i];
    let min = Math.min(first.length, second.length);
    let allSame = true;
    for (let j = 0; j < min; j++) {
      let x = first[j];
      let y = second[j];
      if (x !== y) {
        allSame = false;
        if (!graph[x].has(y)) {
          graph[x].add(y);
          incoming[y]++;
        }
        break;
      }
    }
    // fast path => first word smaller with all characters same
    if (allSame && first.length > second.length) return '';
  }

  // BFS with 0 incoming first
  let str = '',
    queue = [];
  for (let char in incoming) {
    if (incoming[char] === 0) queue.push(char);
  }

  while (queue.length) {
    const char = queue.shift();
    str += char;
    for (let next of graph[char]) {
      incoming[next]--;
      if (incoming[next] === 0) {
        queue.push(next);
      }
    }
  }

  return str.length === Object.keys(graph).length ? str : '';

};




var alienOrderDistance = function(words) {
  let arr = [];
  words.forEach((v, i) => arr.push(v.split('')))
  // get order from first column
  let order = [], orderMap = {}, idxMap = {};
  arr.forEach((row, i) => {
    let ch = row[0];
    if (ch in orderMap === false) {
      order.push(ch);
      orderMap[ch] = ch;
    }
    idxMap[ch] = idxMap[ch] || [];
    idxMap[ch].push(i);
  });
  let cycle = false;
  for (let key in idxMap) {
    let idxs = idxMap[key];
    if (idxs.length > 1) {
      for (let i=1; i<idxs.length; i++) {
        if (idxs[i] !== idxs[i-1]+1) {
          return '';
        }
      }
    }
  }
  let distance = {};
  for (let row = 0; row < arr.length; row++) {
    for (let col = 1; col < arr[row].length; col++) {
      let ch = arr[row][col];
      if (ch in orderMap === false) {
        if (ch in distance === false) {
          distance[ch] = Number.MAX_VALUE;
        }
        distance[ch] = Math.min(distance[ch], Math.sqrt(row**2+col**2));
      }
    }
  }
  let rest = Object.keys(distance)
    .map((ch) => ({w: ch, dis: distance[ch]}))
    .sort((a, b) => (a.dis - b.dis))
    .map(v => v.w);
  return order.concat(rest).join('');
};
