const loopingTriangle = str => {
  let result = ''
  for (let i = 0; i < 7; i++) {
    result += str
    console.log(result)
  }
}

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz\n')
    } else if (i % 3 === 0) {
      console.log('Fizz\n')
    } else if (i % 5 === 0) {
      console.log('Buzz\n')
    } else {
      console.log(i)
    }
  }
}

const chessboard = size => {
  let str = ''
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i % 2 === 0 && j % 2 === 0)
        str += ' '
      else if (i % 2 === 0 && j % 2 !== 0)
        str += '#'
      else if (i % 2 !== 0 && j % 2 !== 0)
        str += ' '
      else if (i % 2 !== 0 && j % 2 === 0)
        str += '#'
    }
    str += '\n'
  }
  console.log(str)
}

const minimum = (a, b) => a < b ? a : b

const isEven = num => {
  if (num < 0)
    return 'Number should be positive'
  if (num === 0)
    return true
  if (num === 1)
    return false
  return isEven(num - 2)
}

const countBs = (str, char) => {
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char)
      counter++
  }
  return counter
}

console.log(countBs('Kujo Jotaro', 'o'))