const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')

const app = express()

const tasksRoute = require('./src/routes')

app.use(compression())
app.use(helmet())
app.use(bodyParser.json())

let tasks = {}

const genId = () => Date.now()

app.use('/tasks', tasksRoute({tasks, genId}))

app.use((req, res) => res.send('last'))

app.use((err, req, res, next) => res.send(err))

app.listen(3000)
