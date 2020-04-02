const fs = require('fs')

const lastLatinLetterCode = 122

const sortList = input => {
  const [_, ...data] = input.split(/\n\d+\.\s+(?=[a-zA-ZА-Яа-я])/g)
  const cyrillicSet = data.filter(item => item.charCodeAt(0) > lastLatinLetterCode).sort()
  const latinSet = data.filter(item => item.charCodeAt(0) <= lastLatinLetterCode).sort()
  const result = [...cyrillicSet, ...latinSet].join('\n')
  console.log('Writing data to the file...')
  fs.writeFile('result.txt', result, () => console.log('Done.'))
}

sortList(``)