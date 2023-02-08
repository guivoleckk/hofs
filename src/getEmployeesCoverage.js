const data = require('../data/zoo_data');

const firstName = data.employees.map((name) => name.firstName);
const lastName = data.employees.map((sname) => sname.lastName);
const idEmployees = data.employees.map((identify) => identify.id);

const findEmp = (param) => {
  const objResult = {};
  const empInput = data.employees.find((employee) => employee.firstName === param.name
  || employee.lastName === param.name
  || employee.id === param.id);
  const completeName = `${empInput.firstName} ${empInput.lastName}`;
  const responsibleAnimals = data.species
    .filter((element) => empInput.responsibleFor.includes(element.id));
  console.log(responsibleAnimals);
  const animalNames = responsibleAnimals.map((element) => element.name);
  const regionAnimals = responsibleAnimals.map((element) => element.location);
  objResult.id = empInput.id;
  objResult.fullName = completeName;
  objResult.species = animalNames;
  objResult.locations = regionAnimals;
  return objResult;
};

const empListInfo = () => {
  const arrAllEmp = [];
  data.employees.forEach((element) => {
    const responsibleAnimals = data.species
      .filter((specie) => element.responsibleFor.includes(specie.id));
    const returnOfAllEmp = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: responsibleAnimals.map((animal) => animal.name),
      locations: responsibleAnimals.map((index) => index.location),
    };
    arrAllEmp.push(returnOfAllEmp);
  });
  return arrAllEmp;
};

const getEmployeesCoverage = (param) => {
  if (!param) {
    return empListInfo();
  }
  if (firstName.includes(param.name)
  || lastName.includes(param.name) || idEmployees.includes(param.id)) {
    return findEmp(param);
  } throw new Error('Informações inválidas');
};

console.log(getEmployeesCoverage({ name: 'Wilburn' }));

module.exports = getEmployeesCoverage;
