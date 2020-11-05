const recursive = require('./recursive')
const reduce = require('./reduce')
const splitJoin = require('./split-join')
const spreadOperator = require('./spread-operator')

test('test recursive function', () => {
  expect(recursive.reverseString('aeiou')).toEqual('uoiea')
});


test('test reduce function', () => {
  expect(reduce.reverseString('aeiou')).toEqual('uoiea')
});


test('test splitJoin function', () => {
  expect(splitJoin.reverseString('aeiou')).toEqual('uoiea')
})

test('test spreadOperator function', () => {
  expect(spreadOperator.reverseString('aeiou')).toEqual('uoiea')
});;
