const express = require('express')
const app_port = process.env.PORT || 3001
const app = express()
app.get('/', (req, res) => {
    res.send('Hello Naseem')
})
app.listen(app_port)
console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)