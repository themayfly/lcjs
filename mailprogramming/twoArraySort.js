/*
사이즈가 m인 배열 X와 사이즈가 n인 배열 Y가 주어집니다.

두 배열은 모두 정렬된 상태입니다.
배열 X에는 정확히 n개의 비어있는 셀이 있다고 할 때,
배열 Y의 원소를 X 배열로 합치며 원소들을 정렬 시키시오.
Input

X = [0, 2, 0, 3, 0, 5, 6, 0, 0] (비어있는 셀은 0으로 표현되었음)
Y = [1, 8, 9, 10, 15]

Output


X = [0, 2, 0, 3, 0, 5, 6, 0, 0]
     ^

Y = [1, 8, 9, 10, 15]
     ^


*/

function twoArraySort(X, Y) {
  let l = 0, r = X.length-1;
  while (l < r) {
    if (X[l] === 0 && X[r] === 0) {
      r--;
    } else if (X[l] === 0 && X[r] !== 0) {
      [X[l], X[r]] = [X[r], X[l]]; // swap
    } else if (X[l] !== 0 && X[r] === 0) {
      [X[l], X[r]] = [X[r], X[l]]; // swap
    }
  }
  
}


X = [0, 2, 0, 3, 0, 5, 6, 0, 0]
Y = [1, 8, 9, 10, 15]


/*

X = [0, 0, 2, 0, 3, 0, 5, 6, 0]
        ^

Y = [1, 8, 9, 10, 15]
     ^

move all zero to the end in X


*/


console.log(twoArraySort(X, Y));

