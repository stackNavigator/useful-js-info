function taskFunction(x) {
  const result = {
    '11': 3
  }
  if (x) {
    result[11] = 2
  }
  if (x === false) {
    result[11] = 4
  }
  result[x] = 2

  let sum = 0
  for (let field in result) {
    sum += result[field]
  }

  return sum
}