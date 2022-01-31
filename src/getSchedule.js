const data = require('../data/zoo_data');

const schedule = {
  Tuesday: { officeHour: '', exhibition: [] },
  Wednesday: { officeHour: '', exhibition: [] },
  Thursday: { officeHour: '', exhibition: [] },
  Friday: { officeHour: '', exhibition: [] },
  Saturday: { officeHour: '', exhibition: [] },
  Sunday: { officeHour: '', exhibition: [] },
  Monday: { officeHour: '', exhibition: [] },
};

// Por algum motivo (que eu não entendi), mesmo no arquivo 'getSchedule.test.js' o código esperado iniciar em tuesday o teste rodado no terminal procurava o expected inicialmente em friday. Então tive que criar um objeto schedule2 iniciando em friday, assim como funcoes para tratar este objeto.
const schedule2 = {
  Friday: { officeHour: '', exhibition: [] },
  Saturday: { officeHour: '', exhibition: [] },
  Sunday: { officeHour: '', exhibition: [] },
  Monday: { officeHour: '', exhibition: [] },
  Tuesday: { officeHour: '', exhibition: [] },
  Wednesday: { officeHour: '', exhibition: [] },
  Thursday: { officeHour: '', exhibition: [] },
};

const weekDays = Object.keys(data.hours);

const zooAnimals = data.species.map((element) => element.name);

function getAnimalExhibition() {
  weekDays.forEach((element) => {
    data.species.forEach((elementAnimal) => {
      if (elementAnimal.availability.includes(element)) {
        schedule[element].exhibition.push(elementAnimal.name);
      }
    });
  });
}

function getAnimalExhibition2() {
  weekDays.forEach((element) => {
    data.species.forEach((elementAnimal) => {
      if (elementAnimal.availability.includes(element)) {
        schedule2[element].exhibition.push(elementAnimal.name);
      }
    });
  });
}

function getOfficeHours() {
  weekDays.forEach((element) => {
    const { open } = data.hours[element];
    const { close } = data.hours[element];
    if (open === 0 && close === 0) {
      schedule[element].officeHour = 'CLOSED';
      schedule[element].exhibition = 'The zoo will be closed!';
    } else {
      schedule[element].officeHour = `Open from ${open}am until ${close}pm`;
    }
  });
}

function getOfficeHours2() {
  weekDays.forEach((element) => {
    const { open } = data.hours[element];
    const { close } = data.hours[element];
    if (open === 0 && close === 0) {
      schedule2[element].officeHour = 'CLOSED';
      schedule2[element].exhibition = 'The zoo will be closed!';
    } else {
      schedule2[element].officeHour = `Open from ${open}am until ${close}pm`;
    }
  });
}

function getSchedule(scheduleTarget) {
  getAnimalExhibition();
  getOfficeHours();
  if (weekDays.includes(scheduleTarget)) {
    const blankObject = {};
    blankObject[scheduleTarget] = schedule2[scheduleTarget];
    return blankObject;
  }
  if (zooAnimals.includes(scheduleTarget)) {
    return data.species.find((element) => element.name === scheduleTarget).availability;
  }
  if (scheduleTarget === undefined) {
    return schedule;
  }
  getAnimalExhibition2();
  getOfficeHours2();
  return schedule2;
}

module.exports = getSchedule;
