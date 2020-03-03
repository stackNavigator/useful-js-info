const fillWithChars = (inputSys, outputSys, pivotSys) => {
  const charCodeDiff = 55
  const fromDict = {}
  const toDict = {}
  if (outputSys > pivotSys)
    for (let i = pivotSys; i < outputSys; i++)
      toDict[i] = i + charCodeDiff
  if (inputSys > pivotSys)
    for (let i = pivotSys; i < inputSys; i++)
      fromDict[i + charCodeDiff] = i
  return { fromDict, toDict }
}

const castToPivotSys = (value, charDict, initSys) => {
  value = value.toString().split('')
  let sum = 0
  for (let i = 0; i < value.length; i++) {
    const code = value[i].charCodeAt(0)
    value[i] = charDict[code] ? charDict[code] : value[i]
    sum += value[i] * initSys ** (value.length - i - 1)
  }
  return sum
}

const castToTargetSys = (value, charDict, targetSys) => {
  const result = []
  while (value >= 1) {
    const remainder = value % targetSys
    result.unshift(charDict[remainder]
      ? String.fromCharCode(charDict[remainder])
      : remainder)
    value = Math.floor(value / targetSys)
  }
  return result.join('')
}

const convert = (initVal, fromSys, toSys) => {
  const marginalSys = 10
  const dicts = fillWithChars(fromSys, toSys, marginalSys)
  if (fromSys !== marginalSys)
    initVal = castToPivotSys(initVal, dicts['fromDict'], fromSys)
  return castToTargetSys(initVal, dicts['toDict'], toSys)
}

console.log(convert('FE', 16, 10))