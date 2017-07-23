const create = ({genId, tasks, logger}) => ({
  findTask: (req, res, next, id) => {
    if (!tasks[parseInt(req.params.id)]) res.sendStatus(404)
    req.taskId = parseInt(req.params.id)
    next()
  },
  createUser: (req, res) => {
    if (!req.body.subject) return res.sendStatus(406)
    const id = genId()
    const task = Object.assign({}, req.body, {id})
    tasks[id] = task
    res.status(201).send(task)
  }
})

module.exports = { create }