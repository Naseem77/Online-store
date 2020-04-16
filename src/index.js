const express  = require("express")
const app_port = process.env.PORT || 3000
const app = express()

<<<<<<< Updated upstream
app.get("/", (req, res) => {    res.send("hello world asd ?")
=======
app.get("/", (req, res) => {    res.send("hello world welcome to ??")
>>>>>>> Stashed changes
})

app.listen(app_port)
console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)
