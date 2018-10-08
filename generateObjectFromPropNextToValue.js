const input = ['name', 'Alex', 'surname', 'Roflov', 'access', 'admin', 'age', '101']

const generateObjectFromPropNextToValue = (input) => {
  const keys = input.filter((_, i) => {
    return i % 2 === 0
  })
  const values = input.filter((_, i) => {
    return i % 2 !== 0 
  })
  
  return {
    keys: [...keys],
    values: [...values]
  }
}

console.log(generateObjectFromPropNextToValue(input))