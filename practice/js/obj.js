var obj = {
  a: 1,
  fn() {
   console.log(this.a)
  }
}

f = obj.fn
f.call(obj)