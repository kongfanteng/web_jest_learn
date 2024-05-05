test('toMatch 字符串', () => {
  expect('http://www.baicu.com').toMatch('http')
})
// Array
test('toContain', () => {
  const arr = ['dell', '1']
  expect(arr).toContain('dell')
})
// Set
test('toContain', () => {
  const arr = ['dell', '1']
  const data = new Set(arr)
  expect(data).toContain('dell')
})
// 异常
const throwNewErrorFunc = () => {
  throw new Error('new error')
}
test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow(/new error/)
})
