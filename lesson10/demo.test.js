import { fetchData } from './demo'

const { getNumber } = jest.requireActual('./demo')

import axios from 'axios'
jest.mock('axios')
// test('fetchData 测试', async () => {
//   axios.get.mockResolvedValue({ data: `(function(){return '123'})()` })
//   const data = await fetchData()
//   expect(eval(data)).toEqual('123')
// })

jest.mock('./demo')
test('fetchData 测试', () => {
  return fetchData().then(({ data }) => {
    expect(eval(data)).toEqual('123')
  })
})

test('getNumber 测试', () => {
  expect(getNumber()).toEqual(13)
})
