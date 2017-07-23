const entities = {}
const init = () => ({
  findEntity: id => entities[id],
  saveEntity: (id, data) => (entities[id] = Object.assign({}, data, {id})) && entities[id],
  deleteEntity: id => delete entities[id],
  getAllEntities: () => Object.keys(entities).map(key => entities[key]),
  getFilteredEntities: (fieldName, value) =>
    Object.keys(entities)
      .map(key => entities[key])
      .filter(entity => entity[fieldName] === value)
})

module.exports = { init }
