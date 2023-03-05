function camelCase(str) {
  let words = str.split(" "); // разбиваем строку на слова
  let result = ""; // создаем пустую строку для результата
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) { // пропускаем пустые слова
      let firstLetter = words[i][0].toUpperCase(); // первая буква в верхнем регистре
      let rest = words[i].slice(1).toLowerCase(); // остальные буквы в нижнем регистре
      result += firstLetter + rest; // добавляем слово в результирующую строку
    }
  }
  return result;
};

console.log(camelCase('camel case'))
