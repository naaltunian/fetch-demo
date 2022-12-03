const express = require('express')
const cors = require('cors')
const routes = require('./controllers/routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', routes)

const PORT = 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))