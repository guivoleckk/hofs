const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const objEmpty = {};
    data.species.forEach((specie) => {
      objEmpty[specie.name] = specie.residents.length;
    });
    return objEmpty;
  }
  const specieQtt = data.species.filter((specie) => specie.name === animal.species)[0].residents;
  if (animal.sex) {
    const numberSex = specieQtt.filter((bicho) => bicho.sex === animal.sex).length;
    return numberSex;
  }
  return specieQtt.length;
};

module.exports = countAnimals;
