const data = require('../data/zoo_data');

const allRegions = () => {
  const arr = ['NE', 'NW', 'SE', 'SW'];
  return arr.reduce((acc, element) => {
    acc[element] = data.species
      .filter((specie) => specie.location === element)
      .map((localization) => localization.name);
    return acc;
  }, {});
};

// const nombres = () => {
//   const arr = ['NE', 'NW', 'SE', 'SW'];
//   return arr.reduce((acc, element) => {
//     acc[element] = data.species
//       .filter((specie) => specie.residents === element)
//       .map((animal) => animal.name);
//     return acc;
//   }, []);
// };


// NE: [
//   { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//   { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
// ],
// // [...]

const getAnimalMap = (options) => {
  if (!options) return allRegions();
};

module.exports = getAnimalMap;
