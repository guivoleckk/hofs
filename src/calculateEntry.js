const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const countEntrants = (entrants) => {
  const objVisitors = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) objVisitors.child += 1;
    else if (entrant.age >= 18 && entrant.age < 50) objVisitors.adult += 1;
    else objVisitors.senior += 1;
  });
  return objVisitors;
};

const calculateEntry = (entrant) => {
  if (entrant === undefined || Object.values(entrant).length === 0) {
    return 0;
  } const resultVisitors = countEntrants(entrant);
  return resultVisitors.adult * data.prices.adult + resultVisitors.child * data.prices
    .child + resultVisitors.senior * data.prices.senior;
};

module.exports = { calculateEntry, countEntrants };
