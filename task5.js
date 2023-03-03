// Функция delay
// delay(5000).then()
function delay(x) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {  
         resolve(`прошло ${x} секунд`)
   }, x)
  })
 }
 
 delay(5000)
 