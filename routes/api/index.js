const route = require('express').Router()

route.get('/',(req,res)=> res.send('We are in'))

module.exports = route