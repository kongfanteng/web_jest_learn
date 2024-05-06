import { fetchData } from './fetchData'

// test('fetchData 返回结果为对象', (done) => {
//   fetchData((data) => {
//     expect(typeof data).toBe('object')
//     done()
//   })
// })
// test('fetchData 返回结果为对象', () => {
//   return fetchData().then(({ data }) => {
//     expect(typeof data).toBe('object')
//   })
// })
test('fetchData 返回结果为 404', () => {
  expect.assertions(1)
  return fetchData().catch((e) => {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})
