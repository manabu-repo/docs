const fs = require('fs')
const path = require('path')

const getFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

getFile('./node/json/file.json')
  .then(data => console.log(data))
  .catch(err => console.error(err))

// console.log('path', path.join(__dirname, ''))
