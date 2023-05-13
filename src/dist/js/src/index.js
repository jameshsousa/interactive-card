"use strict";
const submit = document.getElementById("submit");
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;
const cvc = document.getElementById("cvc").value;
const nameCard = document.getElementById("name-card");
nameCard.addEventListener('input', () => {
    const namesCard = document.getElementById("name-card").value;
    document.getElementById("cardName").innerText = namesCard;
});
const number = document.getElementById("number");
number.addEventListener('input', () => {
    const number = document.getElementById("number").value;
    document.getElementById("cardNumber").innerText = number.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1 $2 $3 $4");
});
const months = document.getElementById("month");
months.addEventListener('input', () => {
    const number = document.getElementById("month").value;
    document.getElementById("monthcard").innerText = number;
});
const years = document.getElementById("year");
years.addEventListener('input', () => {
    const number = document.getElementById("year").value;
    document.getElementById("yearcard").innerText = number;
});
const cvcs = document.getElementById("cvc");
cvcs.addEventListener('input', () => {
    const number = document.getElementById("cvc").value;
    document.getElementById("cvcCard").innerText = number;
});
function isNumberCard(numbercard) {
    const numberRegex = new RegExp(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1 $2 $3 $4");
    if (numberRegex.test(numbercard)) {
        return true;
    }
    return false;
}
const inputConfirm = document.querySelector("#submit");
inputConfirm.addEventListener("click", (event) => {
    event.preventDefault();
    if (nameCard.value == "") {
        document.querySelectorAll("input")[0].style.border = "solid 3px #FF5050";
        document.querySelector("#nameblank").style.visibility = "visible";
        return;
    }
    else if (isNumberCard(number.value)) {
        alert("não é um número válido");
    }
    else if (number.value == "") {
        document.querySelectorAll("input")[1].style.border = "solid 3px #FF5050";
        document.querySelector("#numberblank").style.visibility = "visible";
        return;
    }
    else if (months.value == "") {
        document.querySelectorAll("input")[2].style.border = "solid 3px #FF5050";
        return;
    }
    else if (years.value == "") {
        document.querySelectorAll("input")[3].style.border = "solid 3px #FF5050";
        return;
    }
    else if (cvcs.value == "") {
        document.querySelectorAll("input")[4].style.border = "solid 3px #FF5050";
        document.querySelector("#cvcblank").style.visibility = "visible";
        return;
    }
    else {
        document.getElementsByClassName("return")[0].style.visibility = "visible";
        document.getElementsByClassName("form")[0].style.display = "none";
    }
});
