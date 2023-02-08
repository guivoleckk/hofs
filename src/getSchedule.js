const data = require('../data/zoo_data');

const closeDay = () => {
  const answerMonday = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return answerMonday;
};

const choosedDay = (scheduleObj, day) => {
  const dayObj = {};
  dayObj[day] = scheduleObj[day];
  return dayObj;
};

const getAnimalDay = (param) => data.species
  .filter((specie) => specie.name === param)[0].availability;

const getSchedule = (scheduleDay) => {
  const arrayAnimais = data.species.map((specie) => specie.name);
  const arrayDays = Object.keys(data.hours);
  const schedule = arrayDays.reduce((finalObj, day) => {
    const newObj = {};
    newObj[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species
        .filter((specie) => specie.availability.includes(day))
        .map((specie) => specie.name),
    };
    return Object.assign(finalObj, newObj);
  }, {});
  if (scheduleDay === 'Monday') return closeDay();
  if (arrayDays.includes(scheduleDay)) return choosedDay(schedule, scheduleDay);
  if (arrayAnimais.includes(scheduleDay)) return getAnimalDay(scheduleDay);
  return Object.assign(schedule, closeDay());
};

module.exports = getSchedule;
