const data = require('../data/zoo_data');

function animalNotDefined() {
  const namesArray = data.species.map((currentValue) => currentValue.name);
  const quantitiesArray = data.species.map((currentValue) => currentValue.residents.length);
  const allAnimals = {};
  for (let index = 0; index < namesArray.length; index += 1) {
    allAnimals[namesArray[index]] = quantitiesArray[index];
  }
  return allAnimals;
}

function animalGender(solicitation) {
  const specieResidentsArray = data.species.find(
    (currentValue) => currentValue.name.includes(solicitation.specie),
  ).residents;
  const solicitedGenderArray = specieResidentsArray.filter(
    (currentValue) => currentValue.sex === solicitation.sex,
  );
  return solicitedGenderArray.length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return animalNotDefined();
  }
  if (Object.entries(animal).length === 1) {
    return data.species.find(
      (currentValue) => currentValue.name.includes(animal.specie),
    ).residents.length;
  }
  return animalGender(animal);
}

module.exports = countAnimals;
