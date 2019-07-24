let myDate = new Date(1996, 4, 2);
let myAgePlanets1 = new AgePlanets(myDate, 80);

import {AgePlanets} from './../src/ageExpectancy';
import {getPlanetsYears} from './../src/main';

describe ('Age for planets', function(){

  it ('will return years alive mercury', function(){

    expect(myAgePlanets1.getYearsOnPlanet(getPlanetsYears()[0])).toEqual(96);
  });
  it ('will return years alive venus', function(){
    expect(myAgePlanets1.getYearsOnPlanet(getPlanetsYears()[1])).toEqual(37);
  });
  it ('will return years alive earth', function(){
    expect(myAgePlanets1.getYearsOnPlanet(getPlanetsYears()[2])).toEqual(23);
  });
  it ('will return years alive mars', function(){
    expect(myAgePlanets1.getYearsOnPlanet(getPlanetsYears()[3])).toEqual(12);
  });
  it ('will return years alive jupiter', function(){
    expect(myAgePlanets1.getYearsOnPlanet(getPlanetsYears()[4])).toEqual(1);
  });

  it ('will return earth years left for 1996 person', function(){
    expect(myAgePlanets1.getYearsLeftOnPlanet(getPlanetsYears()[2])).toEqual(56);
  });

  let myDate2 = new Date(1936, 4, 2);
  let myAgePlanets2 = new AgePlanets(myDate2, 80);

  it ('will return earth years left for 1936 person', function(){
    expect(myAgePlanets2.getYearsLeftOnPlanet(getPlanetsYears()[2])).toEqual('-3.2');
  });

  it ('will return earth years left for 1996 mars person', function(){
    expect(myAgePlanets1.getYearsLeftOnPlanet(getPlanetsYears()[3])).toEqual(30);
  });
});
