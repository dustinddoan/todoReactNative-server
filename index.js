const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv').load({silent: true})
var app = express()
var router = require('./services/router')
const bcrypt = require('bcrypt-nodejs')


mongoose.connect(process.env.MONGODB_UR || 'mongodb://localhost:hitlistReactNative/hitlistReactNative')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use('/v1', router)

var PORT  = process.env.PORT || 3000

console.log('Listening on: ', PORT);
app.listen(PORT)
