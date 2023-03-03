// Написать реализацию функции flow
// const inc = (a) => a + 1;
// flow(inc)(5) // 6
// flow(inc, inc)(5) // 7
// flow(inc, inc, inc)(5) //8
// flow(inc, inc, inc, inc)(5) //9

function flow(...funcs) {
  return function(value) {
    return func.reduce((result, func) => {
  })
} 
}
