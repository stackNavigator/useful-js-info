const randomize = (from, to) => {
  const arr = []
  for (let i = 0; i < to; i++)
    arr.push(Math.floor(Math.random() * (to - from + 1)) + from)
  return arr
}

const bubbleSort = arr => {
  let swapped = true
  let lastIndex = arr.length - 1
  while (swapped) {
    swapped = false
    for (let i = 0; i < lastIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
    lastIndex--
  }
  return arr
}

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let currentElement = arr[i]
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentElement
  }
  return arr
}

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  let left = low
  let right = high
  const pivot = arr[Math.floor(Math.random() * (high - low)) + low]
  while (left <= right) {
    while (arr[left] < pivot)
      left++
    while (arr[right] > pivot)
      right--
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  if (low < left - 1)
    quickSort(arr, low, left - 1)
  if (left < high)
    quickSort(arr, left, high)
  return arr
}

const binarySearch = (arr, value, i = 0, j = arr.length - 1) => {
  if (j - i === 0)
    return -1
  const mid = Math.floor((i + j) / 2)
  if (value === arr[mid])
    return mid
  if (arr[mid] < value)
    return binarySearch(arr, value, mid + 1, j)
  if (arr[mid] > value)
    return binarySearch(arr, value, i, mid)
}