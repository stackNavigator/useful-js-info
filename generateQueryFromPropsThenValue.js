const input = ['name', 'surname', 'access', 'age', 'Alex', 'Roflov', 'admin', '101']

const generateQueryString = (input) => {
  const middle = input.length / 2
  const keys = input.slice(0, middle)
  const values = input.slice(middle, input.length)

  const output = keys.map((elem, i) => {
    return elem += ` = ${values[i]}`
  }).join(', ')

  return {
    output
  }
}

console.log(generateQueryString(input))