
const express = require('express')
const crud = require('./crud').init()

const create = ({genId, tasks, logger = console}) => {
  const router = express.Router()

  router.param('id', (req, res, next) => {
    req.entity = crud.findEntity(parseInt(req.params.id))
    req.entity
      ? next()
      : res.sendStatus(404)
  })

  router.get('/', (req, res, next) => {
    const {fieldName, fieldValue} = req.params
    (fieldName && fieldValue)
      ? res.send(crud.getFilteredEntities(fieldName, fieldValue))
      : res.send(crud.getAllEntities())
  })

  router.post('/', (req, res) => res.status(201).send(crud.saveEntity(genId(), req.body)))

  router.get('/:id', (req, res) => console.log(req.entity) || res.send(req.entity))

  router.put('/:id', (req, res) => res.send(crud.saveEntity(genId(), req.body)))

  router.delete('/:id', (req, res) => {
    crud.deleteEntity(req.params.id)
    res.sendStatus(204)
  })

  return router
}

module.exports = create
