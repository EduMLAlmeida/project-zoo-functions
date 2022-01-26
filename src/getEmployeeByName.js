const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const first = data.employees.find((currentValue) => currentValue.firstName === employeeName);
  const last = data.employees.find((currentValue) => currentValue.lastName === employeeName);
  if (first === undefined) {
    return last;
  }
  return first;
}

module.exports = getEmployeeByName;
