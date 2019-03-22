const convertNumberToBinary = (string) => {
  const output = []
  for (let char in string) {
    output.push(string.charCodeAt(char).toString(2))
  }

  return output.join('')
}

console.log(['a', 'b', 'c', ['1', '2']].flat())