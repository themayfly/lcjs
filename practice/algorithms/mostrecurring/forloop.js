function doit(input) {
  if (!input) {
    return 'None'
  }
  const map = {}
  let count = 0
  let char = ''
  for (let v of input) {
    if (map.hasOwnProperty(v)) {
      map[v] += 1
    } else {
      map[v] = 1
    }
    if (count < map[v]) {
      count = map[v]
      char = v
    }
  }
  return {char, count}
}
console.log('#### answer is ', doit('fdkaaaaaaaaaaaaaaaaaajsakfdahfhhhhhhhhjhjh'))