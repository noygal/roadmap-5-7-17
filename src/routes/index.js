
// let tasks = {}

// const genId = () => Date.now()

const create = ({genId, tasks, logger = console}) => {

  const { findTask, createUser } = require('./tasks').create({genId, tasks, logger})
  const router = require('express').Router()
  
  router.param('id', findTask)

  router.get('/', (req, res) => res.send(tasks))

  router.post('/', createUser)

  router.get('/:id', (req, res) => {
    res.send(tasks[req.taskId])
  })

  router.put('/:id', (req, res) => {
    tasks[req.taskId] = req.body
    res.sendStatus(200)
  })

  router.delete('/:id', (req, res) => {
    delete tasks[req.taskId]
    res.sendStatus(200)
  })

  return router
}

module.exports = create

