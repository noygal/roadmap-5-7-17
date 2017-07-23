const tape = require('tape')
const crud = require('./crud').init()

tape('save entity', t => {
  t.plan(2)
  crud.saveEntity(123, 'momo')
  t.assert(crud.findEntity(123), 'momo', 'create entity')
  crud.saveEntity(123, 'lolo')
  t.assert(crud.findEntity(123), 'lolo', 'update entity')
})

tape('delete entity', t => {
  t.plan(1)
  crud.deleteEntity(123)
  t.equal(crud.findEntity(123), undefined, 'delete entity')
})

tape('list entities', t => {
  t.plan(2)
  crud.saveEntity(1, {filter: 10})
  crud.saveEntity(2, {filter: 10})
  crud.saveEntity(3, {filter: 20})
  t.equal(crud.getAllEntities().length, 3, 'list length')
  t.equal(crud.getFilteredEntities('filter', 10).length, 2, 'filtered list length')
})
