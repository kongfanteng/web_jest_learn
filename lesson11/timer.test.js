import timer from './timer'
beforeEach(() => {
  jest.useFakeTimers()
})
test('timer 测试', () => {
  const fn = jest.fn()
  timer(fn)
  jest.runAllTimers()
  expect(fn).toHaveBeenCalledTimes(2)
})
test('timer2 测试', () => {
  const fn = jest.fn()
  timer(fn)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(2)
})
test('timer3 测试', () => {
  const fn = jest.fn()
  timer(fn)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
})
// 模拟定时器执行 useFakeTimers runAllTimers toHaveBeenCalledTimes
// 快进n秒 advanceTimersByTime
