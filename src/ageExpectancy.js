export class AgePlanets{
  constructor(date, lifeExpectancy){
    this.date = date;
    this.lifeExpectancy = lifeExpectancy;
  }

  //returns exact years alive
  getExactYearsAlive(){
    return ((Date.now() - this.date) / (1000 * 3600 * 24 * 365.2422));
  }
  //input conversion, returns years alive of converted planet from earth years to other planet years
  getYearsOnPlanet(conversion){
    return Math.floor(this.getExactYearsAlive() / conversion);
  }

  //if years left is negative they have surpassed the expectancy
  getYearsLeftOnPlanet(conversion){
        // debugger;
    let exactYearsExpectedEarth = this.lifeExpectancy - this.getExactYearsAlive();
    let exactYears = exactYearsExpectedEarth / conversion;
    if (exactYears > 10){
      return Math.floor(exactYears);
    } else {
      return (exactYears.toFixed(1));
    }
  }

  toString(){
    return this.date.toString() + ", " + this.lifeExpectancy;
  }
}
