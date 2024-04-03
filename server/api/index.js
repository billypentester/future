const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const web = require('./modules/web/api')
const admin = require('./modules/admin/api')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

app.use('/', express.static(__dirname + '/public'))
app.use('/api/web', web)
app.use('/api/admin', admin)

app.listen(port, () => {
    console.log(`Sever running on port: ${port}`)
})