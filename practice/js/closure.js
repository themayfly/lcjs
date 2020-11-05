// (function () {
//   try {
//       console.log('#### try')
//       throw new Error();
//   } catch (x) {
//       console.log('#### catch')
//       var x = 1, y = 2;
//       console.log(x);
//   }
//   console.log('#### after')
//   console.log(x);
//   console.log(y);
// })();

(function () {
  var x;
  var y;
  try {
      throw new Error();
  } catch (x) {
      x = 1; // error object
      y = 2;
      console.log(x); // print error object which assigned by 1
  }
  console.log(x); // undefined
  console.log(y); // 2
})();


// for (var k = 0; k < 4; k++) {
//   console.log(k);
// }

// console.log('#### global.k = ', k)

// function aa() {
//   if (true) {
//     var xx='a';
//     console.log('#### xx 1 = ', xx);
//   }
//   console.log('#### xx 2 = ', xx);
// }
// aa();
// console.log('#### xx 3 = ', xx);
