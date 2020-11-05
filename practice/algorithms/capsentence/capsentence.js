function doit(input) {
  if (!input) {
    return ''
  }
  return input.toLowerCase().split(/\s/).map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}

console.log('#### capsentenced = ', doit('jfkdsja kfjdl KDSLkjfkds'))