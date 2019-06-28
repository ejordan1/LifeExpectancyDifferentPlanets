
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {AgePlanets} from './ageExpectancy';
let userDOB = new Date ('May 2, 1996 03:24:00');
let userDOB1 = new Date (1996, 4, 2);

let planetYears = [.24, .62, 1, 1.88, 11.86];
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




export function getPlanetsYears(){
  return planetYears;
}

$(function(){
  $("body").click(function(event){
    clicked(event);
  });
  $(".ageForm").submit(function(event){
    let ageInput = $("#ageInput").val();
    let lifeExpectancy = $("#lifeInput").val();
    myAgePlanets = new AgePlanets(ageInput, lifeExpectancy);
    $(".form").hide();
    console.log(myAgePlanets.toString());
  });
});


function clicked(event){
  let x = event.clientX;
  let y = event.clientY;
  // console.log(window.innerWidth);
  console.log((x - window.innerWidth / 2));

  for(let i = 0; i < planetDimensions.length; i++){
    if (((x - window.innerWidth / 2) - planetDimensions[i][0]) < planetDimensions[i][1]){
      console.log(i);
    }
  }
}
