const entities = {}
const init = () => ({
  findEntity: _id => entities[_id],
  saveEntity: (_id, data) => (entities[_id] = Object.assign({}, data, {_id})) && entities[_id],
  deleteEntity: _id => delete entities[_id],
  getAllEntities: () => Object.keys(entities).map(key => entities[key]),
  getFilteredEntities: (fieldName, value) =>
    Object.keys(entities)
      .map(key => entities[key])
      .filter(entity => entity[fieldName] === value)
})

module.exports = { init }
