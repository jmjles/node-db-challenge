const express = require('express')
const app = express()
const Port = process.env.PORT || 5000
const apiroute = require('./routes/api/')

app.use('/',apiroute)

app.listen(Port,() => console.log(`Server is running on port: ${Port}`))