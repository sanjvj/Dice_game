var random = Math.floor(Math.random()*6)+1;

var RandomImage = "images/dice" + random + ".png";

document.querySelectorAll("img")[0].setAttribute("src",RandomImage);

var random2 = Math.floor(Math.random()*6) + 1;

var RandomImage2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",RandomImage2);

if(random>random2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}

else if(random2>random){
    document.querySelector("h1").innerHTML="Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}