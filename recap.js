const buildRandomArray = (count, min, max) => {
  const result = []
  for (let i = 0; i < count; i++)
    result.push(Math.floor(Math.random() * (max - min)) + min)
  return result
}

const bubbleSort = arr => {
  let swapped = true
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
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
    let currentElement = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentElement
  }
  return arr
}

const quickSort = (arr, firstIndex = 0, lastIndex = arr.length - 1) => {
  const pivot = arr[Math.floor(Math.random() * (lastIndex - firstIndex + 1)) + firstIndex]
  let i = firstIndex
  let j = lastIndex
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
  if (firstIndex < j)
    quickSort(arr, firstIndex, j)
  if (i < lastIndex)
    quickSort(arr, i, lastIndex)
  return arr
}

const binarySearch = (arr, value, firstIndex = 0, lastIndex = arr.length - 1) => {
  if (firstIndex > lastIndex)
    return `${value} was not found in given array.`
  const pivotIndex = Math.floor((firstIndex + lastIndex) / 2)
  if (arr[pivotIndex] === value)
    return `${value} was found on ${pivotIndex} index.`
  if (arr[pivotIndex] < value)
    return binarySearch(arr, value, pivotIndex + 1, lastIndex)
  if (arr[pivotIndex] > value)
    return binarySearch(arr, value, firstIndex, pivotIndex - 1)
}

const testArray = buildRandomArray(10, -5, 100)
const sortedArray = quickSort(testArray)
console.log(sortedArray)
console.log(binarySearch(sortedArray, 50))