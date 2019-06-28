import {AgePlanets} from './ageExpectancy';
let userDOB = new Date ('May 2, 1996 03:24:00');
let userDOB1 = new Date (1996, 4, 2);

let planetYears = [.24, .62, 1, 1.88, 11.86];

let myDate = new Date(1996, 4, 2);
let myAgePlanets = new AgePlanets(myDate);

console.log(myAgePlanets.getExactYearsAlive());
console.log(myAgePlanets.getYearsOnPlanet(getPlanetsYears()[0]));
//
// console.log((Date.now() - userDOB) / (1000 * 3600 * 24 * 365.2422));
// console.log((Date.now() - userDOB1) / (1000 * 3600 * 24 * 365.2422));
// console.log(Date.now() / (1000 * 3600 * 24 * 365))
// console.log(userDOB / (1000 * 3600 * 24))
// console.log (parseInt(23.155244475161503 / .24));
// console.log (parseInt(23.155244475161503 / .62));
// console.log (parseInt(23.155244475161503 / 1.88));
// console.log (parseInt(23.155244475161503 / 11.86));

export function getPlanetsYears(){
  return planetYears;
}
