// import { syllablesInWord} from './../src/haikuChecker-code';
//
//
// describe ('SyllableTest', function(){
//
//    it('return syllables in a word 11', function(){
//      expect(syllablesInWord("shoe")).toEqual(1);
//    });
//
//
// });

let myDate = new Date(1996, 4, 2);
let myAgePlanets = new AgePlanets(myDate, 80);

import {AgePlanets} from './../src/ageExpectancy';
import {getPlanetsYears} from './../src/main';

describe ('Age for planets', function(){

  it ('will return years alive mercury', function(){
    // console.log(myAgePlanets.getYearsOnPlanet(getPlanetsYears()[0]));
    expect(myAgePlanets.getYearsOnPlanet(getPlanetsYears()[0])).toEqual(96);
  });
  it ('will return years alive venus', function(){
    expect(myAgePlanets.getYearsOnPlanet(getPlanetsYears()[1])).toEqual(37);
  });
  it ('will return years alive earth', function(){
    expect(myAgePlanets.getYearsOnPlanet(getPlanetsYears()[2])).toEqual(23);
  });
  it ('will return years alive mars', function(){
    expect(myAgePlanets.getYearsOnPlanet(getPlanetsYears()[3])).toEqual(12);
  });
  it ('will return years alive jupiter', function(){
    expect(myAgePlanets.getYearsOnPlanet(getPlanetsYears()[4])).toEqual(1);
  });

  it ('will return earth years left for 1996 person', function(){
    expect(myAgePlanets.getYearsLeftOnPlanet(getPlanetsYears()[2])).toEqual(56);
  });

  let myDate2 = new Date(1936, 4, 2);
  let myAgePlanets2 = new AgePlanets(myDate2, 80);

  it ('will return earth years left for 1936 person', function(){
    expect(myAgePlanets2.getYearsLeftOnPlanet(getPlanetsYears()[2])).toEqual(-4);
  });

  it ('will return earth years left for 1996 mars person', function(){
    expect(myAgePlanets.getYearsLeftOnPlanet(getPlanetsYears()[3])).toEqual(30);
  });
});
