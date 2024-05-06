import axios from 'axios'
export const fetchData = async () => {
  const res = await axios.get('/')
  return res.data
  // res.data = `(function(){return '123'})()`
}
export const getNumber = () => {
  return 13
}
