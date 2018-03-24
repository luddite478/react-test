const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'html')
app.engine('html', (path, options, callbacks) => {
  fs.readFile(path, 'utf-8', callback)
})

app.use(express.static(__dirname))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use((req,res,err,next) => {
  res.status(err.status || 500)
})

app.listen(3000, () => { console.log('port 3000 is listening')})
