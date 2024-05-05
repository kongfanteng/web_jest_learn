test('测试10与10相匹配', () => {
  expect(10).toBe(10)
})
test('测试对象内容相等', () => {
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 })
})
test('tobeNull匹配器', () => {
  const a = null
  expect(a).toBeNull()
})
// 真假有关的匹配器
test('tobeUndefined匹配器', () => {
  const a = undefined
  expect(a).toBeUndefined()
})
test('toBeDefined', () => {
  const a = 0
  expect(a).toBeDefined()
})
test('toBeTruthy匹配器', () => {
  const a = 1
  expect(a).toBeTruthy()
})
test('toBeFalsy匹配器', () => {
  const a = 0
  expect(a).toBeFalsy()
})
test('not 匹配器', () => {
  const a = 1
  expect(a).not.toBeFalsy()
  expect(a).toBeTruthy()
})
// 数字相关的匹配器
test('toBeGreaterThan', () => {
  const a = 10
  expect(a).toBeGreaterThan(1)
})
test('toBeLessThan', () => {
  const a = 0
  expect(a).toBeLessThan(1)
})
test('toBeGreaterThanOrEqual', () => {
  const a = 10
  expect(a).toBeGreaterThanOrEqual(10)
})
test('toBeCloseTo', () => {
  const firstNumber = 0.1
  const secondNumber = 0.2
  expect(firstNumber + secondNumber).toBeCloseTo(0.3)
})
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
