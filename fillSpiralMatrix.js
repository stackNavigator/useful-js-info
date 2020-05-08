const spiralMatrix = dimensionSize => {
  if (dimensionSize === 1)
    return [1]
  const matrix = Array(dimensionSize).fill(0).map(() => Array(dimensionSize).fill(0))
  let counter = 1
  let startIndex = 0
  let endIndex = dimensionSize
  while (endIndex - startIndex > 0) {
    for (let j = startIndex; j < endIndex; j++) {
      matrix[startIndex][j] = counter
      counter++
    }
    for (let i = startIndex + 1; i < endIndex; i++) {
      matrix[i][endIndex - 1] = counter
      counter++
    }
    for (let j = endIndex - 2; j >= startIndex; j--) {
      matrix[endIndex - 1][j] = counter
      counter++
    }
    for (let i = endIndex - 2; i >= startIndex + 1; i--) {
      matrix[i][startIndex] = counter
      counter++
    }
    startIndex++
    endIndex--
  }
  return matrix
}

console.log(spiralMatrix(6))