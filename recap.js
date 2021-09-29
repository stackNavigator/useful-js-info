const buildRandomArray = (length, minValue, maxValue) => {
  const result = []
  for (let i = 0; i < length; i++)
    result.push(Math.floor(Math.random() * (maxValue - minValue)) + minValue)
  return result
}

const bubbleSort = arr => {
  let lastIndex = arr.length
  let swapped
  do {
    swapped = false
    for (let i = 0; i < lastIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    const currentElement = arr[i]
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentElement
  }
  return arr
}

const quickSort = (arr, leftBoundary = 0, rightBoundary = arr.length - 1) => {
  const pivot = arr[Math.floor(Math.random() * (rightBoundary - leftBoundary + 1)) + leftBoundary]
  let i = leftBoundary
  let j = rightBoundary
  while (i <= j) {
    while (arr[i] < pivot)
      i++
    while (arr[j] > pivot)
      j--
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  if (leftBoundary < j)
    quickSort(arr, leftBoundary, j)
  if (i < rightBoundary)
    quickSort(arr, i, rightBoundary)
  return arr
}

const binarySearch = (arr, value, leftBoundary = 0, rightBoundary = arr.length - 1) => {
  if (rightBoundary - leftBoundary === -1)
    return `${value} is not present in given array.`
  const mid = Math.floor((leftBoundary + rightBoundary) / 2)
  if (value === arr[mid])
    return `${value} was found at index ${mid}.`
  if (value < arr[mid])
    return binarySearch(arr, value, leftBoundary, mid - 1)
  if (value > arr[mid])
    return binarySearch(arr, value, mid + 1, rightBoundary)
}

const throttle = (delay, func) => {
  let elapsedTime = 0
  return () => {
    if (Date.now() - elapsedTime < delay)
      return
    elapsedTime = Date.now()
    func()
  }
}

const debounce = (delay, func) => {
  let timerId = null
  return () => {
    if (timerId)
      clearTimeout(timerId)
    timerId = setTimeout(func, delay)
  }
}
