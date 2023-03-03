// PromiseAll([new Promise()]) // Promise([res, res2, res3])

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = []
    let count = 0 

    promises.forEach((promise, index) => {
      promise.then((result) => {
        result[index] = result
        count++
        if (count === promises.length) {
          resolve(result)
  }

 }).catch((error) => {
      reject(error)
  })
})
})
}
