require('dotenv').config()

const express = require('express')
const db = require('./config/connection')
const routes = require('./Routes')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

db.once('open', () => {
    console.log('Searching....')
    app.listen(PORT, () => {
        console.log(`Your application is now running on Port: ${PORT}`)
    })
})