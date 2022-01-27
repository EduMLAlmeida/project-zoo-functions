const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((currentValue) => currentValue.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const manager = data.employees.filter(
    (currentValue) => currentValue.managers.includes(managerId),
  );
  if (manager.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const subordinatesNames = manager.map(
    (currentValue) => `${currentValue.firstName} ${currentValue.lastName}`,
  );
  return subordinatesNames;
}

module.exports = { isManager, getRelatedEmployees };
