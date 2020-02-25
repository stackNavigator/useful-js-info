const sampleGraph = {
  'start': ['a', 'b'],
  'a': ['finish'],
  'b': ['finish'],
  'finish': []
}

const bubbleSort = (arr, swapped = true, lastIndex = arr.length - 1) => {
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

const quickSort = (arr, low = 0, hi = arr.length - 1) => {
  if (hi - low > 10) {
    const pivot = arr[Math.floor(Math.random() * (hi - low) + low)]
    let left = low
    let right = hi
    while (right >= left) {
      while (arr[right] > pivot)
        right--
      while (arr[left] < pivot)
        left++
      if (right < left)
        break
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
    quickSort(arr, low, left)
    quickSort(arr, left + 1, hi)
  }
  return insertionSort(arr)
}

const binarySearch = (arr, value, i = 0, j = arr.length - 1) => {
  if (j - i === 0)
    throw new Error('Value was not found!')
  const mid = Math.floor((i + j) / 2)
  if (arr[mid] === value)
    return mid
  if (arr[mid] < value)
    return binarySearch(arr, value, mid + 1, j)
  if (arr[mid] > value)
    return binarySearch(arr, value, i, mid)
}

const mergeSort = arr => {
  if (arr.length === 1)
    return arr
  const mid = Math.floor(arr.length / 2)

  const merge = (leftArr, rightArr) => {
    let result = []
    let i = 0
    let j = 0

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        result.push(leftArr[i])
        i++
      }
      else {
        result.push(rightArr[j])
        j++
      }
    }
    return [...result, ...leftArr.slice(i), ...rightArr.slice(j)]
  }

  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid))
  )
}

const breadthFirst = (graph, node) => {
  const nodes = [...graph[node]]
  const searched = []
  while (nodes.length) {
    const item = nodes.shift()
    if (searched.includes(item))
      continue
    if (item === 'finish')
      return `Item ${item} was successfully found on this way: ${searched.join(' -> ')}`
    nodes.push(...graph[item])
    searched.push(item)
  }
  return `Requested item was not found!`
}

const test = (total) => {
  const arr = []
  for (let i = 0; i < total; i++)
    arr.push(Math.floor(Math.random() * total) + 1)
  const start = new Date()
  console.log(arr)
  console.log(quickSort(arr))
  const end = new Date()
  console.log(`It took ${(end - start)} milliseconds.`)
}

test(1e+1)