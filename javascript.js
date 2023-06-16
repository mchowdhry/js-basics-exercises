/*

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}



let question = prompt('What is the "official" name of javascript','');

if (question == 'ECMAScript'){
    alert('Right!');
}   else{
    alert('You don\'t know? "ECMAScript"!')
}



let number = prompt('Enter a number', 0);

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else 
{ alert(0);
}



let result = (a + b < 4) ? 'Below' : 'Over';



let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
}



if (browser == 'Edge') {
  alert ('You\'ve got the Edge');
} else if (browser == 'Chrome' 
  || browser == 'Firefox' 
  || browser == 'Safari' 
  || browser == 'Opera'; {
  alert ('Okay we support these browsers too');
} else {
  alert( 'We hope that this page looks ok!');
}


switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );

*/

let a = +prompt('a?', '');

switch (a){
  case 0:
    alert (0);
    break;

  case 1:
    alert (1);
    break;

  case 2:
  case 3:
    alert ('2,3');
    break;
}