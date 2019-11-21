const logMsg = (msg, cb) => {
  setTimeout(() => cb(null, msg), 100)
}

const promisify = (cb, ...args) => new Promise((resolve, reject) =>
  cb.apply(this, [...args, (err, result) => err ? reject(err) : resolve(result)]))

promisify(logMsg, 'test!').then(result => console.log(result))