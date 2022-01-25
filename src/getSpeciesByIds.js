const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    const requestedSpecie = data.species.filter((currentValue) => currentValue.id === ids[0]);
    return requestedSpecie;
  }
  const requestedSpecies = [];
  for (let index = 0; index < ids.length; index += 1) {
    const auxiliar = data.species.filter((currentValue) => currentValue.id === ids[index]);
    requestedSpecies.push(auxiliar[0]);
  }
  return requestedSpecies;
}

console.log(getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46',
));

module.exports = getSpeciesByIds;
