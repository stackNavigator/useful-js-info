const convertToJSON = payload => payload.map(value => Object.keys(value).reduce((acc, key) => ({
  ...acc,
  [`"${key}"`]: `${value[key]}`
}), {}))


console.log(convertToJSON([
  {
    prop1: 'value1',
    prop2: 'value2'
  },
  {
    prop3: 'value3',
    prop4: 'value4'
  }
]
))