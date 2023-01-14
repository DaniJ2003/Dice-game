var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img11 = "images/dice"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img22 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src", img11);
document.querySelector(".img2").setAttribute("src", img22);
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "🏳️ Draw 🏳️";
}