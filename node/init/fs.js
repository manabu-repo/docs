const fs = require('fs')

fs.open('./node/json/file.json', 'r', (err, fd) => {
  console.log('fd: ', fd)
})
