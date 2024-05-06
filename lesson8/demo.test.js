import { creatObject, runCallback, getData } from './demo'
import axios from 'axios'

jest.mock('axios')

test('测试 runCallback', () => {
  const func = jest.fn() // mock 函数，捕获函数的调用
  runCallback(func)
  expect(func).toBeCalled()
})
test('测试 runCallback 调用两次', () => {
  const func = jest.fn() // mock 函数，捕获函数的调用
  runCallback(func)
  runCallback(func)
  expect(func.mock.calls.length).toBe(2)
})
test('测试 runCallback 传递参数 abc', () => {
  const func = jest.fn() // mock 函数，捕获函数的调用
  runCallback(func)
  expect(func.mock.calls[0]).toEqual(['abc'])
})
test('测试 runCallback 回调返回数据 mock', () => {
  const func = jest.fn(() => {
    return '456'
  }) // mock 函数，捕获函数的调用
  runCallback(func)
  expect(func.mock.results[0].value).toEqual('456')
})
test('测试 runCallback mockReturnValueOnce', () => {
  const func = jest.fn() // mock 函数，捕获函数的调用
  func.mockReturnValueOnce('456')
  func.mockReturnValueOnce('123')
  runCallback(func)
  runCallback(func)
  expect(func.mock.results[0].value).toEqual('456')
})
test('测试 runCallback mockReturnValueOnce', () => {
  const func = jest.fn() // mock 函数，捕获函数的调用
  func.mockReturnValue('456')
  runCallback(func)
  runCallback(func)
  expect(func.mock.results[0].value).toEqual('456')
})

test('测试 creatObject', () => {
  const func = jest.fn() // mock 函数，捕获函数的调用
  creatObject(func)
  console.log(func.mock)
})

test('测试 getData', async () => {
  axios.get.mockResolvedValueOnce({ data: 'hello' })
  axios.get.mockResolvedValueOnce({ data: 'world' })
  await getData().then((data) => {
    expect(data).toBe('hello')
  })
  await getData().then((data) => {
    expect(data).toBe('world')
  })
})

test('测试 runCallback2', async () => {
  const func = jest.fn()
  func.mockImplementationOnce(() => {
    return this
  })
  func.mockImplementationOnce(() => {
    return 'abc'
  })
  runCallback(func)
  runCallback(func)
  expect(func).toBeCalled()
  expect(func.mock.results[0].value).toBeUndefined()
  expect(func).toBeCalledWith('abc')

})

// mock函数的作用
// 1. 捕获函数的调用和返回结果，以及 this 和调用顺序
// 2. 自由设置返回结果
// 3. 改变函数的内部实现
