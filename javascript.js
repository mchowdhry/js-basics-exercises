/*

//FUNDAMENTALS PART 1

//Variables

let message;
message = 'Hello';
alert(message);

let user = John;
let age = 25;
let message = 'Hello';

let message;
message = 'Hello';
message = 'World!';
alert(message);

let hello = 'Hello World!';
let message;
message=hello;
alert(hello);
alert(message);


let $ = 1;
let _ = 2;
alert($ + _);



//Constants

const myBirthday = '18.04.1987';
alert(myBirthday);



const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
alert(color);


let admin, name;
name = "John";
admin = name;
alert(admin);

let ourPlanetName = "Earth";
let currentUserName = "John";



//Js Arithmetic

let x = 100 + 50;
alert(x);


let a = 100;
let b = 50;
let x = a + b;
alert(x);



let a = 3;
let x = (100 + 50) * a;
alert (x);



alert(23 + 97)
alert(1+2+3+4+5+6)
alert((4 + 6 + 9) / 77)



let a = 10;
alert(a);
alert(9*a);

let b = 7*a;
alert(b);

const max = 57;
let actual = (max-13);
let percentage = (actual/max);
alert(percentage);



if (hour < 18) {
    greeting = "Good day";
}

*/

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
