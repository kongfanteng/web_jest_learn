import { fetchData, fetchError } from './fetchData'

// test('fetchData 返回结果为对象', (done) => {
//   fetchData((data) => {
//     console.log('data:', data)
//     expect(typeof data).toBe('object')
//     done()
//   })
// })
test('fetchData 返回结果为对象', () => {
  return fetchData().then(({ data }) => {
    expect(data).toEqual({ success: true })
  })
})
test('fetchError 返回结果为 404', () => {
  expect.assertions(1)
  return fetchError().catch((e) => {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})
test('fetchData 返回结果为 { success: true }', () => {
  return expect(fetchData()).resolves.toMatchObject({
    data: { success: true },
  })
})
test('fetchError 返回结果为 404', () => {
  return expect(fetchError()).rejects.toThrow()
})
test('fetchData 返回结果为 { success: true }', async () => {
  await expect(fetchData()).resolves.toMatchObject({
    data: { success: true },
  })
})
test('fetchError 返回结果为 404', async () => {
  await expect(fetchError()).rejects.toThrow()
})
test('fetchData 返回结果为 { success: true }', async () => {
  const { data } = await fetchData()
  expect(data).toEqual({ success: true })
})
test('fetchError 返回结果为 404', async () => {
  expect.assertions(1)
  try {
    await fetchError()
  } catch (error) {
    expect(error.toString().indexOf('404') > -1).toBe(true)
  }
})
