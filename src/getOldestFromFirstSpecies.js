const data = require('../data/zoo_data');

const findAnimalID = (employeeID) => data.employees.find(
  (element) => element.id === employeeID,
).responsibleFor[0];

const findResidentAnimalsArray = (animalID) => data.species.find(
  (element) => element.id === animalID,
).residents;

function findOlderAnimal(animalObjectsArray) {
  let olderAnimal = animalObjectsArray[0];
  animalObjectsArray.forEach((element) => {
    if (element.age > olderAnimal.age) {
      olderAnimal = element;
    }
  });
  return Object.values(olderAnimal);
}

function getOldestFromFirstSpecies(id) {
  return findOlderAnimal(findResidentAnimalsArray(findAnimalID(id)));
}

module.exports = getOldestFromFirstSpecies;
