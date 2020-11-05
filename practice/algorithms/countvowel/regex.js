function countVowels(input) {
  if (!input) {
    return 0
  }
  const regexp = /[aeiou]/ig
  console.log(input.match(regexp))
  return input.match(regexp).length
}

console.log('#### answer is ', countVowels('anehizxcv'))