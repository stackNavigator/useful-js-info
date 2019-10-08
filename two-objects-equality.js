const areObjectsEqual = (obj1, obj2) => {
  return Object.keys(obj1).every(key => obj1[key] === obj2[key])
}

console.log(areObjectsEqual({
  prop1: 'val1',
  prop2: 'val2'
}, {
  prop2: 'val2',
  prop1: 'val1'
}))