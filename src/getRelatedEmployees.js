const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((currentValue) => currentValue.managers.includes(id));
}

const test = (subordinatesArray) => {
  if (subordinatesArray.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

function getRelatedEmployees(managerId) {
  const manager = data.employees.filter(
    (currentValue) => currentValue.managers.includes(managerId),
  );
  const subordinates = manager.map(
    (currentValue) => `${currentValue.firstName} ${currentValue.lastName}`,
  );
  try {
    test(subordinates);
    return subordinates;
  } catch (error) {
    throw error.message;
  }
}

console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
