function permutations(string) {
  if (string.length <= 1) {
    return [string]
  } else {
    const result = new Set()
    for (let i = 0; i < string.length; i++) {
      const char = string[i]
      const remainingChar = string.slice(0, i) + string.slice(i + 1)
      const permutationsOfRemainingChars = permutations(remainingChar)
      permutationsOfRemainingChars.forEach((permutations) => {
        result.add(char + permutations)
      })
    }
    return Array.from(result)
  }
}


permutations('abc'); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
