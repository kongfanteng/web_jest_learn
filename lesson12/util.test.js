import Util from './util'
let util = null
beforeAll(() => {
  util = new Util()
})
test('测试 a 方法', () => {
  expect(util.a()).toBeUndefined()
})
