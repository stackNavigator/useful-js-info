const invertNum = (num) => {
  const str = num.toString().split('').reverse().join('')
  return parseInt(str) * Math.sign(num)
}

console.log(invertNum(-50))