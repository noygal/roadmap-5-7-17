

// let tasks = {}

// const genId = () => Date.now()

const create = ({genId, tasks, logger = console}) => {

  const router = require('express').Router()
  
  router.param('id', (req, res, next, id) => {
    if (!tasks[parseInt(req.params.id)]) res.sendStatus(404)
    req.taskId = parseInt(req.params.id)
    next()
  })

  router.get('/', (req, res) => res.send(tasks))

  router.post('/', (req, res) => {
    if (!req.body.subject) return res.sendStatus(406)
    const id = genId()
    const task = Object.assign({}, req.body, {id})
    tasks[id] = task
    res.status(201).send(task)
  })

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

