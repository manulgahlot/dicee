var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomdiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomdiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 First player wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Second player wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}


var firstpersonnamefinal = document.querySelectorAll("p")[0].innerHTML = firstpersonname;
var secondpersonnamefinal = document.querySelectorAll("p")[1].innerHTML = secondpersonname;
