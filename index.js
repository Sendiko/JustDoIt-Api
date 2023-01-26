const express = require('express')
const PORT = 3000
const db = require('./repository/database')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})
