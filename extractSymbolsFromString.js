const divideStringByLettersAndNums = (string) => {
  let letters = ''
  let numbers = ''
  const regex = /[a-zA-Z]/

  for (let char of string)
    Number(char)
      ? numbers += char
      : regex.test(char)
        ? letters += char
        : char

  return {
    numbers,
    letters
  }
}

console.log(divideStringByLettersAndNums('aydf345fgdfg&dsf&'))