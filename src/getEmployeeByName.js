const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((ep) => ep.firstName === employeeName || ep.lastName === employeeName);
};
// if (employeeName === undefined) {
//   return {};
// }
// const primeiroNome = data.employees.filter((employee) => employee.firstName === employeeName);
// const segundoNome = data.employees.filter((employee) => employee.lastName === employeeName);
// if (primeiroNome.length > 0) {
//   return primeiroNome.shift();
// } if (segundoNome.length > 0) {
//   return segundoNome.shift();
// }

console.log(getEmployeeByName('Wilburn'));

module.exports = getEmployeeByName;
