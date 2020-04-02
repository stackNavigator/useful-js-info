const constructPyramid = (symbol, height) => {
  const result = []
  for (let i = 0; i < height; i++) {
    const filler = ' '.repeat((height - i - 1) * symbol.length)
    result.push(filler + symbol.repeat(2 * i + 1) + filler)
  }
  return result.join('\n')
}

console.log(constructPyramid('#', 5))