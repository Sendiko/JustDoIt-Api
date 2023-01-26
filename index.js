const express = require('express')
const PORT = 3000
const db = require('./repository/database')
const task = require('./repository/models/task')
const user = require('./repository/models/user')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})
