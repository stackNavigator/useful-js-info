const JSONParcer = string => {
  try {
    return JSON.parse(string)
  }
  catch (err) {
    return err
  }
}

const obj = {
  prop: 'val'
}