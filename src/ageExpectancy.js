export class AgePlanets{
  constructor(date){
    this.date = date;
  }

  getExactYearsAlive(){
    return ((Date.now() - this.date) / (1000 * 3600 * 24 * 365.2422));
  }
  //conversion is earth to other planet
  getYearsOnPlanet(conversion){
    return parseInt(this.getExactYearsAlive() / conversion);
  }



}
