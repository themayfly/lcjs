var obj = {
  A:1,
  a: console.log(this),
  fn: function() {
    console.log('##### this = ', this)
    console.log(this === global)
    function fn() {
      console.log(this === global)
    }
    fn()
  }
}

obj.fn()
