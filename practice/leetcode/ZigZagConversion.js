/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    if (numRows <= 1) {
        return s;
    }
    var curIdx = 0;
    var init = {x:0, y:0, char: s[curIdx]};
    var list = [];
    getNext(s, numRows, init, curIdx, list);
    return print(list);
};

var getNext = function(s, numRows, cursor, curIdx, list) {
    if (s.length === list.length) {
        return;
    }
    list.push(cursor);
    var next = {};
    if (cursor.y === (numRows-1)) { // upper boundary
        yDelta = -1;
        xDelta = 1;
    } else if (cursor.y === 0) { // lower boundary
        yDelta = 1;
        xDelta = 0;
    }
    next.y = cursor.y + yDelta;
    next.x = cursor.x + xDelta;
    curIdx += 1;
    next.char = s[curIdx]
    getNext(s, numRows, next, curIdx, list);
};


var print = function(list) {
    list.sort((a, b) => {
        if (a.y === b.y) {
            return a.x - b.x;
        } else {
            return a.y - b.y;
        }
    })
    return list.map(el => el.char).join('');
};
