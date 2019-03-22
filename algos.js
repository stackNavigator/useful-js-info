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

const test = (total, value) => {
  const arr = []
  for (let i = 0; i < total; i++) {
    arr.push(Math.floor(Math.random() * total) - total / 2)
  }
  const start = new Date()
  const sortedArray = mergeSort(arr)
  const index = binarySearch(sortedArray, value)
  console.log(`Index of ${value} is : ${index}`)
  const end = new Date()
  console.log(`It took ${(end - start) / 1000} seconds.`)
}

test(1000000, 42)