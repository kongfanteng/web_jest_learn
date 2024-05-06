export const fetchData = () => {
  return new Promise((res, rej) => {
    res({
      data: `(function(){return '123'})()`,
    })
  })
}

