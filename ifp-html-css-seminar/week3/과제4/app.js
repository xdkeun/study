const backCard = document.querySelectorAll(".back");
const frontCard = document.querySelectorAll(".front");

function firstCardClick(){
    alert(frontCard[0].innerText);
}
backCard[0].addEventListener("click", firstCardClick);

function secondCardClick(){
    alert(frontCard[1].innerText);
}
backCard[1].addEventListener("click", secondCardClick);

function thirdCardClick(){
    alert(frontCard[2].innerText);
}
backCard[2].addEventListener("click", thirdCardClick);