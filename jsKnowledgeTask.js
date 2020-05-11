const encodeChars = string => {
  let result = ''
  let prevChar = ''
  let charCount = 1
  for (let char of string)
    if (char === prevChar)
      charCount++
    else {
      result += `${charCount !== 1 ? charCount : ''}${char}`
      prevChar = char
      charCount = 1
    }
  result += charCount
  return result
}

console.log(encodeChars('HRRGGBBBB'))