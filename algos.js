const sampleGraph = {
  'start': [ 'a', 'b' ],
  'a': [ 'finish' ],
  'b': [ 'finish' ],
  'finish': []
}

const selectionSort = arr => {
  const sortedArr = []
  const arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    let smallest = arr[0]
    let currentIndex = 0
    arr.forEach((item, i) => {
      if (item < smallest) {
        smallest = item
        currentIndex = i
      }
    })
    sortedArr.push(...arr.splice(currentIndex, 1))
  }
  return sortedArr
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
    return [ ...result, ...leftArr.slice(i), ...rightArr.slice(j) ]
  }

  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid))
    )
}

const binarySearch = (arr, value, i = 0, j = arr.length - 1) => {
  const mid = Math.floor((i + j) / 2)
  if (arr[mid] === value)
    return mid
  if (j - i === 0)
    return -1
  if (arr[mid] < value)
    return binarySearch(arr, value, mid + 1, j)
  if (arr[mid] > value)
    return binarySearch(arr, value, i, mid)
}

const quicksort = arr => {
  if (arr.length < 2)
    return arr
  const pivot = arr.shift()
  const left = arr.filter(el => el <= pivot)
  const right = arr.filter(el => el > pivot)
  return quicksort(left) + pivot + quicksort(right)
}

const breadthFirst = (graph, node) => {
  const nodes = [ ...graph[node] ]
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

const dijkstra = graph => {
  
}

const test = (total) => {
  const arr = []
  for (let i = 0; i < total; i++)
    arr.push(1 + Math.floor(Math.random() * total))
  const start = new Date()
  console.log(breadthFirst(sampleGraph, 'start'))
  const end = new Date()
  console.log(`It took ${(end - start)} milliseconds.`)
}

test(10000)