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

const range = (start, end, step = 1) => {
  let result = []
  if ((step >= 0 && end < start) || (step < 0 && end > start)) {
    const placeholder = start
    start = end
    end = placeholder
  }
  if (step < 0)
    for (let i = start; i >= end; i += step)
      result.push(i)
  if (step >= 0)
    for (let i = start; i <= end; i += step)
      result.push(i)
  return result
}

const sum = arr => arr.reduce((acc, item) => acc + item, 0)

const reverseArray = arr => arr.map((_, i, arr) => arr[arr.length - i - 1])

const reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
  }
  return arr
}

const arrayToList = (arr) => {
  if (arr.length === 1)
    return {
      value: arr[0],
      rest: null
    }
  return { 
    value: arr.shift(), 
    rest: arrayToList(arr) 
  }
}

const listToArray = (list, result = []) => {
  if (!list)
    return result
  const { value, rest } = list
  result.push(value)
  return listToArray(rest, result)
}

const prepend = (el, list) => {
  return {
    value: el,
    rest: list
  }
}

const nth = (index, list) => {
  if (list) {
    const { value, rest } = list
    if (value === index + 1)
      return list
    return nth(index, rest)
  }
  return undefined
}

const deepEqual = (a, b) => {
  if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null)
    return Object.keys(a).every(key => a[key] === b[key])
  return a === b ? true : false
}

const flatten = arr => arr.reduce((acc, array) => [ ...acc, ...array], [])

const loop = (index, test, update, body) => {
  while (test(index)) {
    body(index)
    index = update(index)
  }
  return false
}

const everythingLoop = (arr, predicate) => {
  for (let item of arr)
    if (!predicate(item))
      return false
  return true
}

const everythingSome = (arr, predicate) => arr.some(item => !predicate(item))

class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus({x, y}) {
    return new Vec(this.x + x, this.y + y)
  }

  minus({x, y}) {
    return new Vec(this.x - x, this.y - y)
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2).toFixed(2)
  }
}

class Group {
  constructor() {
    this.group = []
  }

  add(item) {
    if (!this.group.includes(item))
      this.group = [...this.group, item]
  }

  delete(item) {
    this.group = this.group.filter(el => el !== item)
  }

  has(item) {
    return this.group.includes(item)
  }

  static from(obj) {
    const group = new Group()
    for (let item of obj)
      group.add(item)
    return group
  }
}