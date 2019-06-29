
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {AgePlanets} from './ageExpectancy';
let userDOB = new Date ('May 2, 1996 03:24:00');
let userDOB1 = new Date (1996, 4, 2);

let planetYears = [.24, .62, 1, 1.88, 11.86, 29.457, 84.0205, 164.8];
let myDate = new Date(1996, 4, 2);

let myAgePlanets;
let imageWidth = 910;
let planetPos = 300;
let planetDimensions = [];
let planet0 = [83, 15];
let planet1 = [153, 15];
let planet2 = [245, 30];
let planet3 = [334, 15];
let planet4 = [455, 45];
let planet5= [600, 25];
let planet6 = [729, 15];
let planet7 = [820, 15];
planetDimensions.push(planet0);
planetDimensions.push(planet1);
planetDimensions.push(planet2);
planetDimensions.push(planet3);
planetDimensions.push(planet4);
planetDimensions.push(planet5);
planetDimensions.push(planet6);
planetDimensions.push(planet7);

let filledOutForm = false;
let planetInfoQuery;


export function getPlanetsYears(){
  return planetYears;
}

$(function(){
  $(".bottomSection").hide();
  $("#guessForm").hide();
  $(".planetInfo").hide();
  $(".correct").hide();
  $(".incorrect").hide();
  $(".guessForm").hide();
  $(".butWhy").hide();
planetInfoQuery = document.querySelector(".planetInfo");
planetInfoQuery.style.top = "400px";
  $("body").click(function(event){
    clicked(event);
  });
  $(".ageForm").submit(function(event){
    event.preventDefault();
    let ageInputMonth = $("#ageInputMonth").val();
    let ageInputDay = $("#ageInputDay").val();
    let ageInputYear = $("#ageInputYear").val();
    let userDate = new Date(ageInputYear, ageInputMonth, ageInputDay);
    let lifeExpectancy = $("#lifeInput").val();

    myAgePlanets = new AgePlanets(userDate, lifeExpectancy);
    $(".form").hide();
    filledOutForm = true;
    $(".bottomSection").fadeIn();
    setTimeout(function(){
      $(".guessForm").fadeIn();
    }, 1000);
  });
  $(".guessForm").submit(function(event){
      event.preventDefault();

    let guess = $("#inputGuess").val();
    if (guess.toLowerCase() === "mercury"){
      $(".correct").fadeIn();
      filledOutForm = false;
      $(".planetInfo").fadeOut();
      setTimeout(function(){
        $(".butWhy").fadeIn();
      }, 3000);
    } else {
      $(".incorrect").fadeIn();
      setTimeout(function(){
        $(".incorrect").fadeOut();
      }, 1000);
    }
  })
});


function clicked(event){
  if (filledOutForm){
  $(".planetInfo").hide();
  let x = event.clientX;
  let y = event.clientY;
  // console.log(window.innerWidth);
  console.log((x - window.innerWidth / 2));

  for(let i = 0; i < planetDimensions.length; i++){
    let relativeClick = (x - window.innerWidth / 2);
    if (Math.abs((x - window.innerWidth / 2) - (planetDimensions[i][0] - (imageWidth / 2))) < planetDimensions[i][1]){
      console.log(i);
      $(".planetInfo").fadeIn();
      planetInfoQuery.style.left = x - 40 + "px";

      $(".planetInfo").text("Years left: " + myAgePlanets.getYearsLeftOnPlanet(planetYears[i]));
    }
  }
}
}
