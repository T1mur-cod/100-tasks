// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
function arithmeticSequenceElements(a, d, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += a + ", ";
    a += d;
  }
  return result.slice(0, -2); // удаляем последнюю запятую и пробел
}

