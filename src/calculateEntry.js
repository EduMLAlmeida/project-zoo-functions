const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let quantAdult = 0;
  let quantChild = 0;
  let quantSenior = 0;
  entrants.forEach((currentValue) => {
    if (currentValue.age < 18) {
      quantChild += 1;
    } else if (currentValue.age >= 50) {
      quantSenior += 1;
    } else {
      quantAdult += 1;
    }
  });
  const quantAll = { adult: quantAdult, child: quantChild, senior: quantSenior };
  return quantAll;
}

function calculatePrice(visitantsObject) {
  const visitantsArray = Object.entries(visitantsObject);
  let price = 0;
  visitantsArray.forEach((currentValue) => {
    price += data.prices[currentValue[0]] * currentValue[1];
  });
  return price;
}

function calculateEntry(entrants) {
  if (typeof (entrants) === 'object') {
    const emptyObjectTest = Object.entries(entrants);
    if (emptyObjectTest.length === 0) {
      return 0;
    }
  }
  if (entrants === undefined) {
    return 0;
  }
  return calculatePrice(countEntrants(entrants));
}

module.exports = { calculateEntry, countEntrants };
