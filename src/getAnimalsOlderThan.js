const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findAnimalName = data.species.find((specie) => specie.name === animal);
  return findAnimalName.residents.every((resident) => resident.age >= age);
};
  // species.find((specie) =>
  // specie.name === animal).residents.every((idade) => idade.age >= age);

console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
