const fidLongestSubstring = str => {
  let start = 0
  let count = 1
  let prevCount = count
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1])
      count++
    else if (prevCount <= count) {
      prevCount = count
      count = 1
      start = i - prevCount
    }
  }
  if (prevCount < count) {
    prevCount = count
    start = str.length - prevCount
  }
  return str.slice(start, start + prevCount)
}

console.log(fidLongestSubstring('abccdddd'))