// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Hello World')
// })

// server.listen(3000)
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world with express')
})

app.listen(3000)

console.log('Server port 3000')