const findLongestSubstring = str => {
  let subStart = 0
  let counter = 1
  let prevCounter = counter
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++
    }
    else if (prevCounter < counter) {
      prevCounter = counter
      subStart = i - prevCounter + 1
      counter = 1
    }
  }
  return str.slice(subStart, subStart + prevCounter)
}

console.log(findLongestSubstring('aaaabbccdd'))