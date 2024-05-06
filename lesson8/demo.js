import axios from 'axios'
export function runCallback(callback) {
  callback('abc')
}
export function creatObject(classItem) {
  new classItem()
}
export function getData() {
  return axios.get('/api').then((res) => res.data)
}
