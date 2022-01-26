const data = require('../data/zoo_data');

const ageVerifier = (agesArray, minimumAge) => agesArray.every(
  (currentValue) => currentValue.age >= minimumAge,
);

const findSpecie = (speciesArray, speciesName) => speciesArray.find(
  (currentValue) => currentValue.name === speciesName,
);

function getAnimalsOlderThan(animal, age) {
  return ageVerifier(findSpecie(data.species, animal).residents, age);
}

module.exports = getAnimalsOlderThan;
