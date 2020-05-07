const path = require('path')
const express = require('express')

const server = express()

const unitRoutes = require('./unit')
const details = require('./details')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/unit', unitRoutes)
server.use('/api/v1/details', details)

module.exports = server
