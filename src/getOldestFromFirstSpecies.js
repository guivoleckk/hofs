const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getEmpAnim = data.employees.filter((employee) => employee.id === id)[0].responsibleFor;
  const objAnimal = data.species.find((specie) => specie.id === getEmpAnim[0]).residents;
  let age = 0;
  let specieMoreOld;
  objAnimal.forEach((animal) => {
    if (age < animal.age) {
      age = animal.age;
      specieMoreOld = animal;
      console.log(specieMoreOld);
    }
  });
  const resultFinal = Object.values(specieMoreOld);
  return resultFinal;
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
