function solution(str){
  let result = [];
 for (let i = 0; i < str.length; i += 2) {
   let pair = str.slice(i, i + 2);
   if (pair.length < 2) {
     pair += "_";
   }
   result.push(pair);
 }
 return result;
}

console.log(solution('abcdef'))


// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']
