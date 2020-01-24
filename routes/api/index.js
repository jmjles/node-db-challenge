const route = require('express').Router()
const {projects} = require('../../data/knexfunctions')
route.get('/',async (req,res)=> res.json(await projects))

module.exports = route