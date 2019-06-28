export class AgePlanets{
  constructor(date, lifeExpectancy){
    this.date = date;
    this.lifeExpectancy = lifeExpectancy;
  }

  getExactYearsAlive(){
    return ((Date.now() - this.date) / (1000 * 3600 * 24 * 365.2422));
  }
  //conversion is earth to other planet
  getYearsOnPlanet(conversion){
    return Math.floor(this.getExactYearsAlive() / conversion);
  }

  getYearsLeftOnPlanet(conversion){
    let exactYearsExpectedEarth = Math.floor(this.lifeExpectancy - this.getExactYearsAlive());
    return exactYearsExpectedEarth * conversion;
  }
}
