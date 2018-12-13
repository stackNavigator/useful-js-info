const convertToJSON = payload => {
  const jsonPayload = payload.map(item => {
    const jsonObj = {}
    for (let prop in item) {
      jsonObj[`"${prop}"`] = `${item[prop]}`
    }
    return jsonObj
  })
  return jsonPayload
}

console.log(convertToJSON())