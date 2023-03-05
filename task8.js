// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:

// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz'
  } else if (n % 3 === 0) {
    return 'fizz'
  } else if (n % 5 === 0){
    return 'buzz'
  } else {
    return n
  }
}

console.log(fizzBuzz(10))
console.log(fizzBuzz(9))
console.log(fizzBuzz(1))
console.log(fizzBuzz(2))
