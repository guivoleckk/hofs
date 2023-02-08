const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const arrEmpty = [];
  if (ids === undefined) {
    return arrEmpty;
  }
  ids.forEach((elemento) => arrEmpty.push(data.species.find((specie) => specie.id === elemento)));
  return arrEmpty;
};

const pegandoEspeciesPeloId = (...ids) => data.species.filter((specie) => ids.includes(specie.id));

console.log(pegandoEspeciesPeloId('ef3778eb-2844-4c7c-b66c-f432073e1c6b'));

console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b'));
module.exports = getSpeciesByIds;
