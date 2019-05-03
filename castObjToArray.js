const castToArray = obj => {
  return Array.prototype.slice.call(obj)
}

console.log(castToArray({ 
  0: 'value1', 
  1: 'value2', 
  2: 'value3', 
  length: 3 
}))