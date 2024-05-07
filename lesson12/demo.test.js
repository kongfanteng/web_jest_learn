jest.mock('./util', ()=>{
  const Util = jest.fn(() => {
    console.log('constructor1')
  })
  Util.prototype.a = jest.fn(() => {
    console.log('a1')
  })
  Util.prototype.b = jest.fn(() => {
    console.log('b1')
  })
  return Util
})
import Util from './util'
import demoFunction from './demo'
test('测试 demoFunction', () => {
  demoFunction()
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})
