const logScript = (msg, cb) => {
  setTimeout(() => cb(null, msg), 100)
}

const promisify = f =>
  (...args) =>
    new Promise((resolve, reject) =>
      f.apply(this, [...args, (err, result) => err ? reject(err) : resolve(result)]))

promisify(logScript)('rofl').then(result => console.log(result))